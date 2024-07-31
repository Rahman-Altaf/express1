// Display File At Web Pages
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello How Are You ");
});

module.exports = router;
