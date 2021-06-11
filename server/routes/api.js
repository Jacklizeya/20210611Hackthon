var express = require('express');
var router = express.Router();
var indexRouter = require("./index")
var locationsRouter = require("./locations.js")


/* GET locations listing. */
router.get("/", indexRouter)
router.use('/locations', locationsRouter);
// have to be use here, get is expecting a function coming
module.exports = router;
