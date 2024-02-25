const express = require("express");
const cors = require("cors");

// express app
const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("get request");
  res.send("response message");
});
