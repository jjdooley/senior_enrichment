'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: Sequelize.STRING,
  grade: {
      type: Sequelize.INTEGER,
      validate:{
        min: 0,
        max: 100
      }
  },
  email:{
      type: Sequelize.STRING,
      validate:{
          isEmail: true
      }
  }
})