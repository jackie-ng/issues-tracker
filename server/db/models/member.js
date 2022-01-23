const Sequelize = require('sequelize')
const db = require('../db')

const Member = db.define('member', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
})

module.exports = Member
