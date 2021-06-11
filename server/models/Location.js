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

module.exports = mongoose.model('Location', locationSchema, 'location');