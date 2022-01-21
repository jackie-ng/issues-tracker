const Sequelize = require('sequelize')
const db = require('../db')

var Task = db.define('Task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: { notEmpty: true }
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'open',
    validate: {
      isIn: {
        args: [
        [
          'Open',
          'In progress',
          'Hold',
          'Fixed',
          'To be tested',
          'Waiting for test'
        ]
      ],
    msg: "must be the right status value"}
    }
  },
})

module.exports = Task
