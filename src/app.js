import express from "express";
import "dotenv/config";
import routeCategories from "./routes/categories.routes";
import { startDatabase } from "./database";
import routeProducts from "./routes/products.routes";

const app = express();
app.use(express.json());

app.use("/categories", routeCategories);
app.use("/products", routeProducts);

app.listen(process.env.PORT || 3333, () => {
  startDatabase();
  console.log("Server running");
});

export default app;
