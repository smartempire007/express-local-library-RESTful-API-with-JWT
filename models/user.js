const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  last_name: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1000
  },
  date: {
    type: Date,
    default: Date.now
  }
});



//Export model
module.exports = mongoose.model('User', UserSchema);