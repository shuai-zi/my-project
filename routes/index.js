const express = require('express');
const app = express()

app.use('/use', require(__dirname + '/users/index.js'))

module.exports = app