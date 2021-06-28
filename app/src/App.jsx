import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>

        <main>
          <Switch>
            <Route sensitive path="/order/:id" component={OrderPage} />
            <Route
              exact
              sensitive
              path="/placeorder"
              component={PlaceOrderPage}
            />
            <Route
              exact
              sensitive
              path="/shipping"
              component={ShippingAddressPage}
            />
            <Route exact sensitive path="/cart/:id?" component={CartPage} />
            <Route
              sensitive
              exact
              path="/product/:id"
              component={ProductPage}
            />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
