import express from "express";

const PORT = 5000;

const app = express();

app.get("/", async (req, res) => {
  res.send("1");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
