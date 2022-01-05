const express = require('express')
const router = express.Router()
const {Issue} = require('../db/models')
// const Sequelize = require('sequelize')
// const adminAuth = require('../customMiddleware')

// api/issues/
router.get('/', async (req, res, next) => {
  try {
    let issues = await Issue.findAll()
    res.json(issues)
  } catch (error) {
    next(error)
  }
})

// api/issues/:id
router.get('/:id', async (req, res, next) => {
  try {
    const issue = await Issue.findByPk(req.params.id)
    res.json(issue)
  } catch (error) {
    next(error)
  }
})
//add new issue
router.post('/', async (req, res, next) => {
  try {
    const newIssue = await Issue.create(req.body)
    res.send(newIssue)
  } catch (error) {
    next(error)
  }
})

module.exports = router
