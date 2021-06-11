var express = require('express');
var router = express.Router();
var Location = require("../models/Location")



/* GET locations listing. */
// router.get('/', 
//   async function(req, res, next) {
//   try {
//   locationlist = await Location.find({});
//   res.status(200).send(locationlist)
// } catch (error) {res.send(error)}
// }
// );

// router.post('/', 
//   async function(req, res, next) {
//   let locationToCreate = req.body
//   console.log("before create", locationToCreate)
//   try {
//   console.log("enter try")
//   let newLocation = new Location(locationToCreate)  
//   console.log("newLocation")
//   await newLocation.save()
//   console.log("after create", newLocation)
//   res.status(200).send(newLocation)
// } catch (error) {res.send(error)}
// }
// );

router.get('/types', 
  async function(req, res, next) {
    console.log("Types requested")
  try {
      types = await Location.getTypes();
      res.send(types)
    } catch (error) {
      console.error("Types error "+ error);
      res.sendStatus(500);
  
    }
  }
);

router.get('/list/:id', 
  async function(req, res, next) {
    try 
    {
      const  type = req.params.id
      console.log("List requested '"+type+"'");

      locationlist =   await Location.getDataByType(type);
      res.send(locationlist)
    } catch (error){
      res.sendStatus(500);
      console.error("List error " + error)
    }
}
);



router.get('/listall', 
  async function(req, res, next) {
    try 
    {
      locationlist = await Location.getDataByType();
      res.send(locationlist)
    } catch (error){
      res.sendStatus(500);
      console.error("List error " + error)
    }
}
);



module.exports = router;
