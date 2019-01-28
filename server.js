const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection

const PORT = process.env.PORT || 3000

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'herokuTest'

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

app.get('/',(req,res) => {
  res.send('Hello World')
})

app.listen(PORT,() => {
  console.log('We are live');
})
