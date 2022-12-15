import database from "../../database";

const createCategorieService = async (name) => {
  try {
    const res = await database.query(
      `
    INSERT INTO 
	    categories (name)
    VALUES
	    ($1)
    RETURNING *;`,
      [name]
    );

    return {
      message: "Categorie created",
      category: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategorieService;
