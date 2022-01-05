const Sequelize = require('sequelize')
const db = require('../db')

const Assignee = db.define('assignee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'img/default.png'
  }
})

module.exports = Assignee
