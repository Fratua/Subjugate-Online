const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  characterClass: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  experience: {
    type: Number,
    default: 0
  },
  skills: {
    type: Map,
    of: Number,
    default: {}
  },
  inventory: {
    type: Map,
    of: Number,
    default: {}
  },
  location: {
    type: String,
    default: 'Safe Haven'
  },
  guild: {
    type: String,
    default: null
  },
  hairstyle: {
    type: String,
    default: 'Default'
  },
  eyeColor: {
    type: String,
    default: 'Default'
  },
  armorStyle: {
    type: String,
    default: 'Default'
  },
  weapon: {
    type: String,
    default: 'Default'
  },
  currency: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', UserSchema);