const mongoose = require('mongoose');
require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
  })

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true)

const uri = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao mongoDB'))
    .catch((err) => console.error(err))