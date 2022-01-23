/* eslint-disable linebreak-style */
const router = require('express').Router()
module.exports = router

router.use('/dashboard', require('./dashboard'))
router.use('/users', require('./users'))
router.use('/issues', require('./issues'))
router.use('/projects', require('./projects'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


