
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ReceipeRoutes = require('./routes/receiperoutes');
const app = express();
mongoose.connect('mongodb+srv://dominic:compressor@cluster0-nd9pi.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error); 
  });

    app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
    //app.use(bodyParser.json());

app.use('/api/recipes', ReceipeRoutes);

module.exports = app; 