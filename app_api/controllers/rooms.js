const mongoose = require("mongoose");
const Room = require("../models/travlr");
const Model = mongoose.model("rooms");

/**
 * GET: /rooms - lists all the rooms
 */
const roomsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * GET: /rooms/:code - lists all the rooms
 */
const roomsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};
module.exports = {
  roomsList,
  roomsByCode,
};