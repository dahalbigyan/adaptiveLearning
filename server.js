const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const routes = require('./router');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// app.use('/', routes);

app.get("/", (req, res)=>{
  console.log("Calling from the root.");
  res.send("Hello World");
});
app.get("/statements", (req, res)=>{
  console.log("Calling from the statements route.");
  res.send("Calling from the statements route.");
});
app.put("/statements", (req, res)=>{
  console.log(req.body);
  console.log("Calling from the put statements route.");
  res.send("Calling from the statements route.");
});

app.get("/activities/state", (req, res)=>{
  console.log("Calling from the activities/state route.");
  console.log(req.body);
  res.send("Calling from the activities/state route.");
});

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`);
});
