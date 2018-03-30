const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const routes = require('./router');
const bodyParser = require("body-parser");
const dataservice = require('./dataservice');

app.use(bodyParser.json());
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
  // console.log(Object.keys(req.body));
  dataservice.saveDataToTheGraphCool(req.body);
  // console.log(req.res);
  // console.log("Calling from the put statements route.");
  res.send("Calling from the statements route.");
});

app.get("/activities/state", (req, res)=>{
  // console.log("Calling from the activities/state route.");
  // console.log(req.query);
    /*
      {
        stateId: 'resume',
        activityId: 'http://6NieVUtP5F4_course_id',
        agent: '{"objectType":"Agent","account":{"name":"67VGY0HQL1|bigyan.dahal@knovva.com","homePage":"http://cloud.scorm.com"},"name":"Bigyan Dahal"}'
      }
    */

  res.send("Calling from the activities/state route.");
});

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`);
});
