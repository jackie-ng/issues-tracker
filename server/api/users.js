const router = require('express').Router()
const {User} = require('../db/models')
// const adminAuth = require('../customMiddleware')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'name']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
