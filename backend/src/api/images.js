const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

const imageSchema = new mongoose.Schema({
  title: String,
  size: String,
  source: String
});

mongoose.connect(databaseUrl);
router.get('/', (req, res) => {
  imageSchema.find().then((data) => {
    console.log(data);
    res.json([
      {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      }
    ]);
  });
});

module.exports = router;
