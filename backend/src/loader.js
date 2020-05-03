const server = require('./config/server')
require('./config/database')
//passa o server de parametro para configuração das rotas
require('./config/routes')(server)