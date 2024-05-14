const express = require("express");

const router = express.Router();

const {
  getFilters,
  createFilters,
} = require("../controllers/pieceFiltersController");

// create new filter set
router.post("/new-filters", createFilters);

// get filter set
router.get("/filters", getFilters);

module.exports = router;
