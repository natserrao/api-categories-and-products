import database from "../../database";

const getProductsCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      `
    SELECT 
	    p.name,
	    p.price,
	    c.name category
    FROM 
        products p
    JOIN 
	    categories c ON c.id = p.category_id
    WHERE
        category_id = $1;
    `,
      [category_id]
    );
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default getProductsCategoryService;
