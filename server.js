const express = require('express');
const app = express();
const port = 8000;
const routes = require('router.js');

app.use('/', routes); 

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`)
});
