import express from "express";
import { create, findAll } from "../controllers/productController.js";

const router = express.Router();

router.route('/').get(findAll).post(create);

export default router;