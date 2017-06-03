'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('students', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})