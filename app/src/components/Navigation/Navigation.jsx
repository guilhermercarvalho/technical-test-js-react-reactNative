import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <i className="fas fa-gamepad" /> Gamez Store
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Navigation
