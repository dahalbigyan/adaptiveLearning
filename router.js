const express = require('express');
const router = express.Router();
const dataservice = require('./dataservice');

router.get("/", (req, res)=>{
  res.send("Hello From The Root Route.");
});

router.get("/statements", (req, res)=>{
  res.send("Calling from the statements route.");
});

router.put("/statements", (req, res)=>{
  dataservice.saveDataToTheGraphCool(req.body);
  res.send("Calling from the statements route.");
});

router.get("/activities/state", (req, res)=>{
  res.send("Calling from the activities/state route.");
});


module.exports = router;
