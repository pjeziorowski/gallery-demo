const express = require('express');

const images = require('./images');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'UP'
  });
});

router.use('/images', images);

module.exports = router;
