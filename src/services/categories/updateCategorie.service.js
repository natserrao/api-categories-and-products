import database from "../../database";

const updateCategorieService = async (name, id) => {
  try {
    const res = await database.query(
      `
     UPDATE
         categories
     SET
         name = $1
     WHERE
         id = $2
     RETURNING *;`,
      [name, id]
    );
    return {
      message: "Category updated",
      category: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategorieService;
