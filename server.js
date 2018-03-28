const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const routes = require('./router');

app.use(cors());
app.use('/', routes);

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`)
});
