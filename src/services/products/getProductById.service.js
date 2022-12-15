import database from "../../database";

const getProductByIdService = async (id) => {
  try {
    const res = await database.query(
      `
    SELECT 
	    *
    FROM 
        products
    WHERE 
	    id = $1;`,
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default getProductByIdService;
