var router = require("express").Router();
var fetchController = require(../../controllers/Headline)


router.get("/scrape",fetchController);

