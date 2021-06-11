require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  locationname: {
    type: String,
    required: true,
    unique: true
  },
  coordinates: {
    type: Object
  }
});

module.exports = mongoose.model('Location', locationSchema, 'location');