import React from 'react'

import { Navbar } from './components'
import ResponsiveAppBar from './components/UI/AppBar'
import Routes from './routes'

const App = () => {
  return (
    <div>
    <nav>
      <ResponsiveAppBar />
    </nav>
      <Routes />
    </div>
  )
}

export default App
