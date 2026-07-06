export const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Headphones, watches, phones, and gadgets",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Shoes, bags, watches, and daily wear",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "home",
    name: "Home",
    description: "Furniture, decor, kitchen, and lifestyle",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Skincare, fragrance, grooming, and wellness",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  },
];

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    description:
      "Noise-cancelling headphones with deep bass and long battery life.",
    price: 2999,
    rating: 4.7,
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    description:
      "Track fitness, calls, notifications, and health from your wrist.",
    price: 4999,
    rating: 4.8,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    description: "Lightweight everyday running shoes with cushioned support.",
    price: 3499,
    rating: 4.6,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Travel Backpack",
    category: "Fashion",
    description:
      "Durable backpack with laptop storage and travel-friendly pockets.",
    price: 1999,
    rating: 4.5,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Modern Sofa Chair",
    category: "Home",
    description:
      "Comfortable accent chair for living rooms, bedrooms, and offices.",
    price: 12999,
    rating: 4.4,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Ceramic Coffee Set",
    category: "Home",
    description: "Minimal ceramic mugs and serving set for coffee lovers.",
    price: 1499,
    rating: 4.3,
    badge: "Latest",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Skincare Essentials Kit",
    category: "Beauty",
    description: "Daily skincare bundle for cleansing, hydration, and glow.",
    price: 2499,
    rating: 4.6,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Luxury Perfume",
    category: "Beauty",
    description: "Long-lasting fragrance with fresh, warm, and elegant notes.",
    price: 3999,
    rating: 4.7,
    badge: "Luxury",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    description: "Portable speaker with rich sound for indoor and outdoor use.",
    price: 2199,
    rating: 4.5,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Classic Wrist Watch",
    category: "Fashion",
    description: "Elegant analog wrist watch for casual and formal outfits.",
    price: 2899,
    rating: 4.4,
    badge: "Latest",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "Table Lamp",
    category: "Home",
    description: "Warm LED table lamp for study desks and bedside spaces.",
    price: 1799,
    rating: 4.2,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "Makeup Brush Set",
    category: "Beauty",
    description: "Soft makeup brush set for smooth blending and daily looks.",
    price: 999,
    rating: 4.3,
    badge: "Deal",
    image:
      "https://images.unsplash.com/photo-1631214540242-3cd8c8b0d2d6?auto=format&fit=crop&w=700&q=80",
  },
];

export const featuredProducts = products.slice(0, 4);
export const bestSellerProducts = [
  products[1],
  products[2],
  products[8],
  products[7],
];
export const latestProducts = products.slice(8, 12);

export const topSellingProducts = [
  { ...products[1], sold: 72, revenue: 359928 },
  { ...products[2], sold: 58, revenue: 202942 },
  { ...products[8], sold: 51, revenue: 112149 },
  { ...products[7], sold: 44, revenue: 175956 },
  { ...products[0], sold: 39, revenue: 116961 },
];

export const adminStats = [
  {
    label: "Total Sales",
    value: "Rs. 967,936",
    trend: "+18% vs last month",
    icon: "💰",
  },
  {
    label: "Orders",
    value: "264",
    trend: "37 new this week",
    icon: "📦",
  },
  {
    label: "Delivered",
    value: "211",
    trend: "80% delivery rate",
    icon: "🚚",
  },
  {
    label: "Active Products",
    value: "12",
    trend: "4 featured items",
    icon: "🛍️",
  },
];

export const salesByCategory = [
  { category: "Electronics", sales: 128500, percent: 92 },
  { category: "Fashion", sales: 84650, percent: 68 },
  { category: "Beauty", sales: 57900, percent: 47 },
  { category: "Home", sales: 45200, percent: 36 },
];

export const adminDeliveries = [
  {
    id: "ORD-1007",
    customer: "Ali Raza",
    city: "Lahore",
    product: products[1].name,
    image: products[1].image,
    status: "Delivered",
  },
  {
    id: "ORD-1008",
    customer: "Ayesha Khan",
    city: "Karachi",
    product: products[2].name,
    image: products[2].image,
    status: "In Transit",
  },
  {
    id: "ORD-1009",
    customer: "Hassan Ahmed",
    city: "Islamabad",
    product: products[8].name,
    image: products[8].image,
    status: "Processing",
  },
  {
    id: "ORD-1010",
    customer: "Sara Malik",
    city: "Multan",
    product: products[7].name,
    image: products[7].image,
    status: "Pending",
  },
];
