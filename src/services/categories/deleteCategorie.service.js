import database from "../../database";

const deleteCategorieService = async (id) => {
  try {
    const res = await database.query(
      `
    DELETE FROM 
	    categories 
    WHERE 	
	    id = $1
    RETURNING *;`,
      [id]
    );
    if (res.rowCount === 0) {
      throw new Error("Categorie not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategorieService;
