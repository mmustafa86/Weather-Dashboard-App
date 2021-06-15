import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const NavBar = props => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
          <Nav className="me-auto">
        
      <Nav.Link href="#home"> <Link to='/'>Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to='/search'>Search</Link></Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
             

        </Container>
      </Navbar>
    )
}



export default NavBar;
