const express = require('express')
const ongController = require('./controllers/OngController')


const routes = express.Router()

routes.post('/ongs', ongController.store)

routes.get('/ongs', ongController.index)

module.exports = routes