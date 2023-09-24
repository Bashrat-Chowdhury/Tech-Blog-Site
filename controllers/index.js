const router = require("express").Router();
//const path = require("path");

// This is the 'get' route
router.get("/", async (req, res) => {
  res.render("blog-listing");
});

module.exports = router;
