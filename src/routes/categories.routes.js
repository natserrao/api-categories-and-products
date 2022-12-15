import { Router } from "express";
import {
  createCategoriesController,
  deleteCategorieController,
  getCategorieByIdController,
  getCategoriesController,
  updateCategorieController,
} from "../controllers/categories.controllers";

const routeCategories = Router();

routeCategories.post("", createCategoriesController);
routeCategories.get("", getCategoriesController);
routeCategories.get("/:id", getCategorieByIdController);
routeCategories.patch("/:id", updateCategorieController);
routeCategories.delete("/:id", deleteCategorieController);

export default routeCategories;
