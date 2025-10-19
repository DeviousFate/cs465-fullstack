/**
 * GET Travelers page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const travelController = async (req, res, next) => {
  await fetch(trips.url, trips.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "Trip Lookup error";
      } else if (json.length === 0) {
        message = "No trips found";
      }
      res.render("travel", { title: "Travlr Getaways", trips: json, message });
    })
    .catch((err) => {
      Logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process trips");
    });
};

module.exports = {
  travelController,
};