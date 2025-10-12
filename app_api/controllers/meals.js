const mongoose = require("mongoose");
const Meal = require("../models/travlr");
const Model = mongoose.model("meals");

/**
 * GET: /meals - lists all the meals
 */
const mealsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * GET: /meals/:code - lists all the meals
 */
const mealsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};
module.exports = {
  mealsList,
  mealsByCode,
};