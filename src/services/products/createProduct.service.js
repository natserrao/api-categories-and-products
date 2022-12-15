import database from "../../database";

const createProductService = async (product) => {
  try {
    const res = await database.query(
      `
    INSERT INTO 
	    products (name, price, category_id)
    VALUES 
	    ($1, $2, $3)
    RETURNING *;
        `,
      [product.name, product.price, product.category_id]
    );

    return {
      message: "Product created",
      product: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
