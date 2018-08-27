require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const {
    NODE_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
})



app.listen(NODE_PORT,()=>{
    console.log(`listening on port ${NODE_PORT}`)
})

