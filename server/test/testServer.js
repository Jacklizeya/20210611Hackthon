const dotenv = require('dotenv'); 
const result= dotenv.config();

if (result.error)
{
    console.error("Dotenv:", result.error);
}

//require('../models/db')
const locDB = require("../models/Location")



//locDB.getDataByType("Wading Pool").then( (l)  => console.log(l));
locDB.getTypes().then( (l)  => console.log(l));

console.log("Start")
console.log("End");
