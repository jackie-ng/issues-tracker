const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  taskId: {
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
  deadline: {
    type: Sequelize.DATE
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Not Assigned'
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

module.exports = Task
