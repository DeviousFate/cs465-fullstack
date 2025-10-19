const mongoose = require("mongoose");
const Tip = require("../models/travlr");
const Model = mongoose.model("tips");

/**
 * GET: /tips - lists all the tips
 */
const tipsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * GET: /tips/:code - lists all the tips
 */
const tipsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};
module.exports = {
  tipsList,
  tipsByCode,
};