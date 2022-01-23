const User = require('./user')
const Issue = require('./issue')
const Project = require('./project')
const Member = require('./member')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//****** Associations
//User and Issue
Issue.belongsTo(User)
User.hasMany(Issue)

//Issue and Project
Issue.belongsTo(Project)
Project.hasMany(Issue)

//User and Member
Member.belongsTo(User)

//Member and Project
Member.belongsTo(Project)
Project.hasMany(Member)



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Issue,
  Member,
  Project
}
