const express = require('express')
const app = express()
const cors = require('cors')
const upload = require('express-fileupload')
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(upload())

app.use(express.urlencoded())
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.header('Access-Control-Allow-Credentials', true)
  next()
})

mongoose.connect("mongodb://localhost:27017/angular-teste",{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

app.use('/contacts', require('./api/contacts/routes'))

app.listen(process.env.PORT, () => {
  console.log('App listen on port ' + process.env.PORT)
})

module.exports =  app