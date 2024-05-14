require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PieceRoutes = require("./routes/pieceRoutes");
const PresetRoutes = require("./routes/presetRoutes");
const FiltersRoutes = require("./routes/filtersRoutes");

// express app
const app = express();

// address cors errors in development
app.use(cors());
// allow access to body attribute in req object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.use("/", PieceRoutes);
app.use("/", PresetRoutes);
// app.use("/", FiltersRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to db"))
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
