const express = require('express')
const {Swimming,listLocations} = require('../models/db')
let router = express.Router()

router.get('/get', async (req, res) => {
  try { res.json({ swimmingList: await listLocations() }) }
  
  catch(err) {console.log('Error getting all pools:', err)}
})

module.exports = router