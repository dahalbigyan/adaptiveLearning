const express = require('express');
const router = express.Router();
const dataservice = require('./dataservice');
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

router.get("/", (req, res)=>{
//   fs.readFile('~/Desktop/_workspace/adaptiveLearning/test.xml', 'utf8', function(err, data) {
//     if (!err) {
//         console.log(JSON.stringify(data));
//     }
// })
  res.send("Hello From The Root Route.")
});

router.get('/students', (req, res)=>{
  // setTimeout(function(){
  //   console.log("Hello Bigyan.");
  //   res.json({data: "Hello from the timeout function."});
  // }, 10000)
  dataservice.getStudentsList(res);
  // dataservice.getStudentsList().then(resp)=>{
  //   res.json({data: resp})
  // };
  // res.send("Calling from the get students route.");
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

router.put("/activities/state", (req, res)=>{
  dataservice.saveDataToTheGraphCool(req);
  res.send("Calling from the activities/state route.");
});

module.exports = router;
