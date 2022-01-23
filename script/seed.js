'use strict'

const db = require('../server/db')
const { User, Issue, Project } = require('../server/db/models')

const dummyIssues = [
  {
    name: 'Gmail Integration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Lectus proin nibh nisl condimentum. Sed adipiscing diam donec adipiscing tristique risus nec.',
    severity: 'Major',
    status: 'Open',
    imageUrl: '/img/uhoh.png'
  },
  {
    name: 'Login Issue',
    description:
      'Laoreet suspendisse interdum consectetur libero id. Faucibus pulvinar elementum integer enim neque volutpat. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sit amet facilisis magna etiam tempor.',
    severity: 'Critical',
    status: 'In progress',
    imageUrl: '/img/uhoh.png'
  },
  {
    name: 'Cloud Migration Issue',
    description:
      'Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nunc sed blandit libero volutpat sed. Libero nunc consequat interdum varius sit amet mattis.',
    severity: 'Show Stopper',
    status: 'Waiting for test',
    imageUrl: '/img/uhoh.png'
  }
]

const dummyProjects = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Project 2',
    description: 'Malesuada bibendum arcu vitae elementum curabitur vitae nunc.'
  },
  {
    name: 'Project 3',
    description: 'Ultrices neque ornare aenean euismod.'
  },
  {
    name: 'Project 4',
    description: 'Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.'
  },
  {
    name: 'Project 5',
    description: 'Magnis dis parturient montes nascetur ridiculus.'
  },
]

const dummyUsers = [
  {
    name: 'Cody',
    email: 'cody@email.com',
    password: '123',
    isAdmin: true
  },
  {
    name: 'Murphy',
    email: 'murphy@email.com',
    password: '123'
  },
  {
    name: 'Jackie',
    email: 'jackie@email.com',
    password: '123'
  }
]
async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  try {
    await Promise.all(
      dummyIssues.map(issue => {
        return Issue.create(issue)
      }),
      dummyUsers.map(user => {
        return User.create(user)
      }),
      dummyProjects.map(project => {
        return Project.create(project)
      })
    )
  } catch (error) {
    console.error('error in Product/Issue', error)
  }
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
