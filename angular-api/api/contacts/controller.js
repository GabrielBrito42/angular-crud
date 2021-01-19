const Service = require('./service')

const Controller = {
  async getContacts(){
    return await Service.getContacts()
  },
  async addContact(contact){
    return await Service.addContact(contact)
  },
  async removeContact(contact){
    return await Service.removeContact(contact)
  },
  async editContact(contact){
    return await Service.editContact(contact)
  },
  async addPicture(file){
    return await Service.addPicture(file)
  }
}

module.exports = Controller