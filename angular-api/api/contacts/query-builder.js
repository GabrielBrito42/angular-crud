const { pick } = require('lodash')

const QueryBuilder = {
  mountExist(params) {
    let query = {$or: []}

    if(params.email){
      query.$or.push({ email: params.email })
    }
    if(params.cpf){
      query.$or.push({ cpf: params.cpf })
    }
    return query
  }
}

module.exports = QueryBuilder