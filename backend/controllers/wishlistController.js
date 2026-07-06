import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getWishlist = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .select("wishlist")
    .populate("wishlist");

  res.json(user.wishlist);
});

export const addToWishlist = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const productId = req.params.productId;
  const alreadySaved = user.wishlist.some(
    (item) => item.toString() === productId
  );

  if (!alreadySaved) {
    user.wishlist.push(productId);
    await user.save();
  }

  const updatedUser = await User.findById(req.user._id)
    .select("wishlist")
    .populate("wishlist");

  res.status(201).json(updatedUser.wishlist);
});

export const removeFromWishlist = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  user.wishlist = user.wishlist.filter(
    (item) => item.toString() !== req.params.productId
  );

  await user.save();

  const updatedUser = await User.findById(req.user._id)
    .select("wishlist")
    .populate("wishlist");

  res.json(updatedUser.wishlist);
});
