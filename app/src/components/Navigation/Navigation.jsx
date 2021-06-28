import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navigation() {
  const cartSelector = useSelector((state) => state.cart)
  const { cartItems } = cartSelector

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <i className="fas fa-gamepad" /> Gamez Store
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Link to="/cart">
              <Nav.Item>
                <img
                  src={`${window.location.origin}/cart-icon.svg`}
                  width="28px"
                  height="28px"
                  alt="Carrinho"
                />
              </Nav.Item>
            </Link>
            <Nav.Item>
              {cartItems.length > 0 && (
                <span className="badge rounded-pill bg-danger text-white">
                  {cartItems.length}
                </span>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
