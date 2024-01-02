import { Models, Products } from "../models/models.js";
import { configureProducts } from "./getData.js";

const postData = async (req, res) => {
  const models = await Products.create(...configureProducts);
};
