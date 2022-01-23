const express = require('express')
const router = express.Router()
const {Project} = require('../db/models')
// const Sequelize = require('sequelize')
// const adminAuth = require('../customMiddleware')

// api/projects
router.get('/', async (req, res, next) => {
  try {
    let projects = await Project.findAll()
    res.json(projects)
  } catch (error) {
    next(error)
  }
})

module.exports = router
