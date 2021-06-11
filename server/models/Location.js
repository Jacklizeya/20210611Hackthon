require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  locationName: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
  },
  coordinates: {
    type: Object,
    required: true
  },
  type: {
    type: String
  }
});


const locationModel = mongoose.model("swimming", locationSchema, "swimming");

async function getDataByType(type=""){
  if ( type===""){
    return locationModel.find({});
  }else{
    return locationModel.find({type}).exec();
  }


  return 
}

async function getTypes()
{
    return locationModel.find({},'type' ).distinct('type').exec();
}

module.exports = mongoose.model('Location', locationSchema, 'location');

module.exports = {
  locationModel,
  getDataByType,
  getTypes
}