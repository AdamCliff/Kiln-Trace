const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FiltersSchema = new Schema({
  formFilters: {
    type: String,
    required: false,
  },
  methodFilters: {
    type: String,
    required: false,
  },
  materialFilters: {
    type: String,
    required: false,
  },
  glazeFilters: {
    type: String,
    required: false,
  },
  underglazeFilters: {
    type: String,
    required: false,
  },
  slipFilters: {
    type: String,
    required: false,
  },
  artistFilters: {
    type: String,
    required: false,
  },
});

const Filters = mongoose.model("filters", FiltersSchema);

module.exports = Filters;
