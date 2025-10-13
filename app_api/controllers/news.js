const mongoose = require("mongoose");
const New = require("../models/travlr");
const Model = mongoose.model("news");

/**
 * GET: /news - lists all the news
 */
const newsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * GET: /news/:code - lists all the news
 */
const newsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};
module.exports = {
  newsList,
  newsByCode,
};