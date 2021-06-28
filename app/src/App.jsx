import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>

        <main>
          <Switch>
            <Route
              sensitive
              exact
              path="/product/:id"
              component={ProductPage}
            />
            <Route exact sensitive path="/cart/:id?" component={CartPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
