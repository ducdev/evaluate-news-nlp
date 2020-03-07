// set dotenv for API
const dotenv = require('dotenv')
dotenv.config()

console.log(`Your API key is ${process.env.API_KEY}`)
console.log(`API_ID: ${process.env.API_ID}`)

// referencing packages required by the project
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require('aylien_textapi')

// set aylien API credentias
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

// set express
const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(express.static('dist'))

// GET route
app.get('/', function(req, res) {
  res.sendFile('dist/index.html')
})

app.get('/test', function(req, res) {
  res.json(mockAPIResponse)
})

// POST route
app.post('/addData', addData)

function addData(req, res) {
  let data = req.body
  textapi.sentiment(
    {
      url: data.formText
    },
    function(error, response) {
      if (error === null) {
        res.send(response)
      } else {
        console.error(error)
      }
    }
  )
}

app.listen(8081, function() {
  console.log('Server is listening on port 8081!')
})