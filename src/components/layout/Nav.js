import React from 'react'
import { Container, Navbar, Nav ,NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

const NavBar = props => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand><Link to='/'>Weather App</Link></Navbar.Brand>
          <Nav className="me-auto">
        
      <Nav.Link > <Link id="RouterNavLink" to='/'>Home</Link></Nav.Link>
      <Nav.Link ><Link  id="RouterNavLink" to='/search'>Search</Link></Nav.Link>
      <Nav.Link ><Link id="RouterNavLink" to='/about'>About</Link></Nav.Link>
    </Nav>
        </Container>
      </Navbar>
    )
}



export default NavBar;
