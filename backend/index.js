import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("HELLO FROM THE BACKEND");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
