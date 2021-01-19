const repository = require('./repository')
const { get } = require('lodash')
const { set } = require('lodash')
const { cpf } = require('cpf-cnpj-validator')
const QueryBuilder = require('./query-builder')
const Collection = require('./collection')
const { compress } = require('../../lib/helpers/image-compression')

const Service = {
  async getContacts(){
    return await repository.getContacts()
  },

  async addContact(contact){
    _validateFields(contact)
    await _validateCpf(contact)
    await repository.addContact(contact)
  },

  async removeContact(contact){
    const id = contact._id
    return repository.removeContact(id)
  },

  async editContact(contact){
    return repository.editContact(contact)
  },

  async addPicture(file){
    const fileName = await compress(file)
    return {fileName}
  }
}

function _validateFields(contact){
  const { name, surname, age, country, gender } = contact
  if(!name || !surname || !age || !country || !gender){
    throw new Error('Por favor preencha todos os campos!')
  }
  return true
}

async function _validateCpf(contact){
  const validCpf = cpf.isValid(contact.cpf)
  set(contact, 'cpf', get(contact, 'cpf').replace(/[^\d]/g, ""))
  if(!validCpf){ throw new Error('informe um cpf válido') }
  const query = QueryBuilder.mountExist(contact)
  const contactExist = await Collection.findOne(query)
  if(contactExist){ throw new Error('Você ja possui esse contato') }
  return true
}

module.exports = Service