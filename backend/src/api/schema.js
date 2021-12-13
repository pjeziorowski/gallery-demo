const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  size: String,
  source: String
});

module.exports = mongoose.model('images', imageSchema)