const Sequelize = require('sequelize')
const db = require('../db')

const Issue = db.define('issue', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: { notEmpty: true }
  },
  severity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['Minor', 'Major', 'Critical', 'Show Stopper']],
        msg: "must be the right severity value"
      }
    }
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
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/uhoh.png'
  }
})

module.exports = Issue
