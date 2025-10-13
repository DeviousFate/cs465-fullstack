const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

/**
 * GET: /trips - lists all the trips
 */
const tripsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * GET: /trips/:code - lists all the trips
 */
const tripsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
};

/**
 * POST: /trips - creates a new trip
 */
const addTrip = async (req, res) => {
  const newTrip = new Model({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    descriptions: [],
  });

  const q = await newTrip.save();
  if (!q) {
    return res.status(400);
  } else {
    return res.status(201).json(q);
  }
};

// PUT: /trips/:tripCode - Updates a Trip
const tripsUpdateTrip = async (req, res) => {
  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      descriptions: [req.body.descriptions],
    },
  ).exec();

  if (!q) {
    return res.status(400);
  } else {
    return res.status(201).json(q);
  }
};

module.exports = {
  tripsList,
  tripsByCode,
  addTrip,
  tripsUpdateTrip,
};