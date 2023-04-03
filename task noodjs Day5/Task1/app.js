const express = require('express')
const app = express()
// const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index_routes')
const ClientRoutes = require('./routes/client_routes')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Client', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

indexRoutes(app)
ClientRoutes(app)

 // custom middle ware to handle error
app.use((err, req, res, next)=>{
  // console.log(err.message);
  res.status(422).send({error: err.message})
})
module.exports = app;
