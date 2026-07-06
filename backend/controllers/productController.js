import Product from "../models/Product.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  const { search, category, featured } = req.query;
  const filter = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    filter.category = { $regex: category, $options: "i" };
  }

  if (featured === "true") {
    filter.isFeatured = true;
  }

  const products = await Product.find(filter).sort({ createdAt: -1 });
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    brand,
    images,
    countInStock,
    isFeatured,
  } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    category,
    brand,
    images: images || [],
    countInStock,
    isFeatured: Boolean(isFeatured),
    createdBy: req.user._id,
  });

  res.status(201).json(product);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const fields = [
    "name",
    "description",
    "price",
    "category",
    "brand",
    "images",
    "countInStock",
    "isFeatured",
  ];

  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      product[field] = req.body[field];
    }
  });

  const updatedProduct = await product.save();
  res.json(updatedProduct);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();
  res.json({ message: "Product deleted successfully" });
});
