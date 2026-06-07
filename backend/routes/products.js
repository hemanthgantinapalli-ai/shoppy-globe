import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({}).select("name price description stock image");
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).select(
      "name price description stock image"
    );

    if (!product) {
      res.status(404);
      return next(new Error("Product not found"));
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
});

export default router;
