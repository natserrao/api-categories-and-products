import createCategorieService from "../services/categories/createCategorie.service";
import deleteCategorieService from "../services/categories/deleteCategorie.service";
import getCategoriesService from "../services/categories/getCategories.service";
import getCategorieByIdService from "../services/categories/getCategoryById.service";
import updateCategorieService from "../services/categories/updateCategorie.service";

export const createCategoriesController = async (request, response) => {
  try {
    const { name } = request.body;
    const created = await createCategorieService(name);
    return response.status(201).json(created);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const getCategoriesController = async (request, response) => {
  try {
    const allCategories = await getCategoriesService();
    return response.status(200).json(allCategories);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const getCategorieByIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const getCategorie = await getCategorieByIdService(id);
    return response.status(200).json(getCategorie);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const updateCategorieController = async (request, response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;
    const updated = await updateCategorieService(name, id);
    return response.status(200).json(updated);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export const deleteCategorieController = async (request, response) => {
  try {
    const { id } = request.params;
    await deleteCategorieService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};
