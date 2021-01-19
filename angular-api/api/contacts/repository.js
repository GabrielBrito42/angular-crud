const Collection = require('./collection')
const { get } = require('lodash')

const repository =  {
  getContacts(){
    return Collection.find({})
  },
  addContact(contact){
    return Collection.create(contact)
  },
  async removeContact(id){
    return Collection.remove({_id: id})
  },
  async editContact(contactEdit){
    return Collection.updateOne({_id: contactEdit._id}, {$set: contactEdit})
  }
}

module.exports = repository