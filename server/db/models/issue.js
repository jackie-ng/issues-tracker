const Sequelize = require('sequelize')
const db = require('../db')

const Issue = db.define('issue', {
  issueId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Not Assigned'
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'pictures/products/default.png'
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
})

Issue.findByCategory = status => Issue.findAll({where: {status}})

module.exports = Issue
