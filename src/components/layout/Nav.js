import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
// import PropTypes from 'prop-types'

const NavBar = props => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}



export default NavBar;
