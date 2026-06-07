import express from "express";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect);

router.get("/", async (req, res, next) => {
  try {
    const cartItems = await CartItem.find({ user: req.user._id }).populate(
      "product",
      "name price description stock image"
    );
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const qty = Number(quantity) || 1;

    if (!productId) {
      res.status(400);
      return next(new Error("Product ID is required"));
    }

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404);
      return next(new Error("Product not found"));
    }

    if (qty < 1) {
      res.status(400);
      return next(new Error("Quantity must be at least 1"));
    }

    if (product.stock < qty) {
      res.status(400);
      return next(new Error("Insufficient stock available"));
    }

    let cartItem = await CartItem.findOne({
      user: req.user._id,
      product: productId,
    });

    if (cartItem) {
      cartItem.quantity += qty;
      cartItem.quantity = Math.min(cartItem.quantity, product.stock);
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        user: req.user._id,
        product: productId,
        quantity: qty,
      });
    }

    const updated = await CartItem.findById(cartItem._id).populate(
      "product",
      "name price description stock image"
    );
    res.status(201).json(updated);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const qty = Number(quantity);

    if (!qty || qty < 1) {
      res.status(400);
      return next(new Error("Quantity must be a positive integer"));
    }

    const cartItem = await CartItem.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("product", "stock");

    if (!cartItem) {
      res.status(404);
      return next(new Error("Cart item not found"));
    }

    if (qty > cartItem.product.stock) {
      res.status(400);
      return next(new Error("Requested quantity exceeds stock"));
    }

    cartItem.quantity = qty;
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const cartItem = await CartItem.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!cartItem) {
      res.status(404);
      return next(new Error("Cart item not found"));
    }

    await cartItem.deleteOne();
    res.json({ message: "Cart item removed" });
  } catch (error) {
    next(error);
  }
});

export default router;
