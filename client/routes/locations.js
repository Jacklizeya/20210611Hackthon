var express = require('express');
var router = express.Router();
var Location = require("../models/Location")

/* GET locations listing. */
router.get('/', 
  async function(req, res, next) {
  try {
  locationlist = await Location.find({});
  res.status(200).send(locationlist)
} catch (error) {res.send(error)}
}
);

router.post('/', 
  async function(req, res, next) {
  let locationToCreate = req.body
  console.log("before create", locationToCreate)
  try {
  console.log("enter try")
  let newLocation = new Location(locationToCreate)  
  console.log("newLocation")
  await newLocation.save()
  console.log("after create", newLocation)
  res.status(200).send(newLocation)
} catch (error) {res.send(error)}
}
);


module.exports = router;
