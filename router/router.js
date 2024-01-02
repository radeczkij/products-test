import express from "express";
import { postData } from "../controllers/postData.js";

const router = express.Router();

router.get("/products", postData.getAll);
router.get("/products/:id", postData.getById);
router.get("/products/size/:size", postData.getProductsBySize);

export default router;
