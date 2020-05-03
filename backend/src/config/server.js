const bodyParser = require('body-parser')
const express = require('express')

const port = 3003
const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, () =>{
    console.log(`Backend is runnig on port ${port}.`)
})

module.exports = server