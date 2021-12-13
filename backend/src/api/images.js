const express = require('express');
const mongoose = require('mongoose');
const imageSchema = require('./schema');

const router = express.Router();
const databaseUrl = process.env.DATABASE_URL
    || 'mongodb://localhost:27017/test';

console.log('Connecting' + databaseUrl)

mongoose.connect(databaseUrl);

router.get('/', (req, res) => {
  imageSchema.find().then((data) => {
    console.log(data);
    res.json(data)
  });
});

module.exports = router;
