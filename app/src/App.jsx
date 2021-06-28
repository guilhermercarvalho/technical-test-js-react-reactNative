import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
