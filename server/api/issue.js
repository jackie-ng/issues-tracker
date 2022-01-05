const express = require('express')
const router = express.Router()
const {Issue} = require('../db/models')
// const Sequelize = require('sequelize')
// const adminAuth = require('../customMiddleware')

router.get('/', async (req, res, next) => {
  try {
    let issues = await Issue.findAll()
    res.json(issues)
  } catch (error) {
    next(error)
  }
})

module.exports = router
