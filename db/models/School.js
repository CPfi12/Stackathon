'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('school', {
  name: Sequelize.STRING,
  imageUrl: Sequelize.STRING 
})
