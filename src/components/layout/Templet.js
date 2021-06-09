import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Search from "../weather/Search";
import Weather from "../weather/Weather";
import GetDaysWeather from "../weather/GetDaysWeather";
const Templet = (props) => {
  return (
    <Container className="my-">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Search />
      <Weather />
      <GetDaysWeather />
    </Container>
  );
};

export default Templet;
