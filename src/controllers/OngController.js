
const crypto = require('crypto')

const conn = require('../database/connection')

module.exports = {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body

  const id = crypto.randomBytes(4).toString('HEX')

  await conn('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })
  
  return res.json({message: 'ONG created successfuly', data: { id }})
  },

  async index(req, res) {
    const ongs = await conn('ongs').select('*')
  
    return res.json({message: 'Showing all ongs', data: ongs})
  }
}