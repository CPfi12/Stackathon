'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('temperature', {
  degrees: Sequelize.DECIMAL,
  time: Sequelize.STRING,
  partDate: Sequelize.STRING 
})
