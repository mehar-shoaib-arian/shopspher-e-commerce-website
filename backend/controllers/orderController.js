import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import asyncHandler from "../utils/asyncHandler.js";

const roundToTwo = (value) => Number(value.toFixed(2));

export const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod = "Cash on Delivery",
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items provided");
  }

  const productIds = orderItems.map((item) => item.product);
  const products = await Product.find({ _id: { $in: productIds } });

  const normalizedItems = orderItems.map((item) => {
    const product = products.find(
      (productItem) => productItem._id.toString() === item.product,
    );

    if (!product) {
      res.status(404);
      throw new Error("One or more products were not found");
    }

    return {
      product: product._id,
      name: product.name,
      image: product.images?.[0] || "",
      price: product.price,
      quantity: Number(item.quantity),
    };
  });

  const itemsPrice = roundToTwo(
    normalizedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  );
  const shippingPrice = itemsPrice > 5000 ? 0 : 250;
  const taxPrice = roundToTwo(itemsPrice * 0.05);
  const totalPrice = roundToTwo(itemsPrice + shippingPrice + taxPrice);

  const order = await Order.create({
    user: req.user._id,
    orderItems: normalizedItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  });

  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });

  res.status(201).json(order);
});

export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.json(orders);
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email",
  );

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  if (
    order.user._id.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    res.status(403);
    throw new Error("Not authorized to view this order");
  }

  res.json(order);
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(orders);
});

export const getOrderAnalytics = asyncHandler(async (req, res) => {
  const [orders, recentOrders, productSales] = await Promise.all([
    Order.find({}),
    Order.find({}).sort({ createdAt: -1 }).limit(8),
    Order.aggregate([
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          name: { $first: "$orderItems.name" },
          image: { $first: "$orderItems.image" },
          sold: { $sum: "$orderItems.quantity" },
          revenue: {
            $sum: { $multiply: ["$orderItems.price", "$orderItems.quantity"] },
          },
        },
      },
      { $sort: { revenue: -1 } },
      { $limit: 5 },
    ]),
  ]);

  const totalSales = orders.reduce(
    (total, order) => total + order.totalPrice,
    0,
  );
  const deliveredOrders = orders.filter((order) => order.isDelivered).length;
  const pendingDeliveries = orders.filter((order) => !order.isDelivered).length;

  res.json({
    totalSales,
    totalOrders: orders.length,
    deliveredOrders,
    pendingDeliveries,
    productSales,
    recentOrders,
  });
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.status = req.body.status || order.status;

  if (order.status === "delivered") {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
  }

  const updatedOrder = await order.save();
  res.json(updatedOrder);
});
