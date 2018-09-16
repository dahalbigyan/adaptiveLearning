const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./router');
const bodyParser = require("body-parser");
// use middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(port, ()=>{
  console.log(`Server is listening at port ${process.env.port}`);
});
