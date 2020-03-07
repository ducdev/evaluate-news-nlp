const dotenv = require('dotenv')
dotenv.config()

console.log(`Your API key is ${process.env.API_KEY}`)

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require('aylien_textapi')

// set aylien API credentias
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()
app.use(cors())
// use json
app.use(bodyParser.json())
// use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(__dirname + 'dist/index.html')
})

app.get('/test', function(req, res) {
  res.json(mockAPIResponse)
})

app.listen(8081, function() {
  console.log('Example app listening on port 8081!')
})