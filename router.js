const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("root home");
});

router.get('/api', (req, res)=>{
  res.send("LRS api home");
});

module.exports = router;
