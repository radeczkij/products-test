import express from "express";
import { configureProducts } from "./controllers/getData.js";

const PORT = 5000;

const app = express();

app.get("/", async (req, res) => {
  res.send(await configureProducts());
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
