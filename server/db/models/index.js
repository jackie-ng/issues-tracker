const User = require('./user')
const Issue = require('./issue')
const Project = require('./project')
const Task = require('./task')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//****** Associations
//User and Issue
Issue.belongsTo(User, {
  as: 'issuer'
})
User.hasMany(Issue, {
  foreignKey: 'issueId',
  allowNull: false
})

//Issue and project
Issue.belongsTo(Project, {
  as: 'bug'
})
Project.hasMany(Issue, {
  foreignKey: 'bugId',
  allowNull: false
})

//Project and Task
Task.belongsTo(Project)
Project.hasMany(Task)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Issue,
  Project,
  Task
}
