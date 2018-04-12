const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const routes = require('./router');
const bodyParser = require("body-parser");
const dataservice = require('./dataservice');

app.use(bodyParser.json());
app.use(function(req, res, next) {
   var contentType = req.headers['content-type'] || ''
   var mime = contentType.split(';')[0];
    // Only use this middleware for content-type: application/octet-stream
    if(mime != 'application/octet-stream') {
        return next();
    }
   var data = '';
   req.setEncoding('binary');
    req.on('data', function(chunk) {
       data += chunk;
   });
   req.on('end', function() {
      req.rawBody = data;
      next();
  });
});

app.use(cors());
app.use('/', routes);

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`);
});
