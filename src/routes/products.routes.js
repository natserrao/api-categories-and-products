import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductsByIdController,
  getProductsCategoryController,
  getProductsController,
  updateProductController,
} from "../controllers/products.controllers";

const routeProducts = Router();

routeProducts.post("", createProductController);
routeProducts.get("", getProductsController);
routeProducts.get("/:id", getProductsByIdController);
routeProducts.patch("/:id", updateProductController);
routeProducts.delete("/:id", deleteProductController);
routeProducts.get("/category/:category_id", getProductsCategoryController);

export default routeProducts;
