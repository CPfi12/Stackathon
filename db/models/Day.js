'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('day', {
  date: Sequelize.STRING
})