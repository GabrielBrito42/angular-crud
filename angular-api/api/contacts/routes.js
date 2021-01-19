const express = require('express')
const router = express.Router()
const Controller = require('./controller')

router.get('/', async(req, res) => {
  try{
    const response = await Controller.getContacts()
    res.send(response)
  }catch(e){
    res.send(e.message)
  }
})

router.post('/add-contact', async(req, res) => {
  const params = req.body
  try{
    const response = await Controller.addContact(params)
    res.send(response)
  }catch(e){
    res.send(e.message)
  }
})

router.post('/remove-contact', async(req, res) => {
  const params = req.body
  try{
    const response = await Controller.removeContact(params)
    res.send(response)
  }catch(e){
    res.send(e.message)
  }
})

router.post('/edit-contact', async(req, res) => {
  const params = req.body
  try{
    const response = await Controller.editContact(params)
    res.send(response)
  }catch(e){
    res.send(e.message)
  }
})

router.post('/add-picture', async(req, res) => {
  const file = req.files.picture
  const fileName = await Controller.addPicture(file)
  res.send(fileName)
})

module.exports = router