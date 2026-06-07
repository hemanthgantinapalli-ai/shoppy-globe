import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";

dotenv.config();
await connectDB();

const products = [
  {
    name: "Ultrasonic Bluetooth Headphones",
    description: "Wireless over-ear headphones with noise cancellation and 30-hour battery life.",
    price: 79.99,
    stock: 57,
    image: "https://example.com/images/headphones.jpg",
  },
  {
    name: "Smart Fitness Watch",
    description: "Track steps, heart rate, and sleep with a bright OLED display.",
    price: 54.99,
    stock: 42,
    image: "https://example.com/images/fitness-watch.jpg",
  },
  {
    name: "Compact Wireless Speaker",
    description: "Portable Bluetooth speaker with rich bass and IPX6 water resistance.",
    price: 39.99,
    stock: 83,
    image: "https://example.com/images/speaker.jpg",
  },
  {
    name: "4K Action Camera",
    description: "Capture adventure footage with image stabilization and waterproof housing.",
    price: 119.99,
    stock: 26,
    image: "https://example.com/images/action-camera.jpg",
  },
  {
    name: "Ergonomic Gaming Mouse",
    description: "High-precision RGB mouse with programmable buttons and adjustable DPI.",
    price: 29.99,
    stock: 94,
    image: "https://example.com/images/gaming-mouse.jpg",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Sample products imported successfully");
    process.exit(0);
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1);
  }
};

import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI must be set in .env for seeding");
  process.exit(1);
}

await importData();
