const express = require('express');
const router = express.Router();

router.get('/add', (req,res) => {
  res.send('add good')
})

router.get('/del', (req,res) => {
  res.send('del good')
})

module.exports = router;