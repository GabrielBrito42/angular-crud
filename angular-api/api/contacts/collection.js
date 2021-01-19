const mongoose = require('mongoose')

const contact = new mongoose.Schema({
  name: String,
  surname: String, 
  age: Number, 
  country: String, 
  gender: String,
  cpf: String,
  email: String,
  picture: String
})

module.exports = mongoose.model('contacts', contact)