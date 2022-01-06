const Sequelize = require('sequelize')
const db = require('../db')

const Issue = db.define('issue', {
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
  severity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['minor', 'major', 'critical', 'show stopper']]
    }
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'open',
    validate: {
      isIn: [
        [
          'open',
          'in progress',
          'hold',
          'fixed',
          'to be tested',
          'waiting for test'
        ]
      ]
    }
  },
  assignee: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/default.png'
  }
})

module.exports = Issue
