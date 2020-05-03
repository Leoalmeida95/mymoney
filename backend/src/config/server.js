const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const port = 3003
const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
//transformar variaveis da url em inteiro para querys como skip e limit
server.use(queryParser())

server.listen(port, () =>{
    console.log(`Backend está rodando na porta ${port}.`)
})

module.exports = server