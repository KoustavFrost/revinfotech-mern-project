require('dotenv').config({ path: __dirname + '/.env' })
require('./db')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env['PORT'];
console.log('port --> ', port)

var dataRoutes = require('./controller/DataController')


var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }))
app.listen(port, () => console.log('Server started at : ', port))


app.use('/data', dataRoutes)