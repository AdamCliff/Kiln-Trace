const mongoose = require("mongoose");

const Filters = require("../models/filtersModel");

const getFilters = async (req, res) => {
  try {
    const filters = await Filters.find();
    res?.status(200).json(filters);
  } catch (error) {
    console.error(error);
  }
};

const createFilters = async (req, res) => {
  try {
    const {
      formFilters,
      methodFilters,
      materialFilters,
      glazeFilters,
      underglazeFilters,
      slipFilters,
      artistFilters,
    } = req.body;

    // console.log(req.body);

    const filters = await Filters.create({
      formFilters,
      methodFilters,
      materialFilters,
      glazeFilters,
      underglazeFilters,
      slipFilters,
      artistFilters,
    });
    res.status(201).json(filters);
  } catch (error) {
    console.error(error);
  }
};

const editFilters = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

const deleteFilters = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getFilters, createFilters };
