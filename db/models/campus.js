'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus =db.define('campus', {
  name: Sequelize.STRING,
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Campus;