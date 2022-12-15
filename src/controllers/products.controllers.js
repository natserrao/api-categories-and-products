import { RowDescriptionMessage } from "pg-protocol/dist/messages";
import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import getProductByIdService from "../services/products/getProductById.service";
import getProductsService from "../services/products/getProducts.service";
import getProductsCategoryService from "../services/products/getProductsCategory.service";
import updateProductService from "../services/products/updateProduct.service";

export const createProductController = async (request, response) => {
  try {
    const product = request.body;
    const productCreated = await createProductService(product);
    return response.status(201).json(productCreated);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const getProductsController = async (request, response) => {
  try {
    const allProducts = await getProductsService();
    return response.status(200).json(allProducts);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const getProductsByIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const productFound = await getProductByIdService(id);
    return response.status(200).json(productFound);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const updateProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const product = request.body;
    const productUpdated = await updateProductService(id, product);
    return response.status(200).json(productUpdated);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const deleteProductController = async (request, response) => {
  try {
    const { id } = request.params;
    await deleteProductService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const getProductsCategoryController = async (request, response) => {
  try {
    const { category_id } = request.params;
    const searchProduct = await getProductsCategoryService(category_id);
    return response.status(200).json(searchProduct);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};
