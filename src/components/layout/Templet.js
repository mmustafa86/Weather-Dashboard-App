import React from "react";
import { Container, Form, FormControl, Card, Row, Col,Navbar ,Nav} from "react-bootstrap";
import Search from '../weather/Search'
import Weather from '../weather/Weather'
import GetDaysWeather from '../weather/GetDaysWeather'
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


     
  <Search/>
<Weather/>
<GetDaysWeather/>
     

      {/* seven days reult */}
      <div class="d-flex justify-content-center mb-3 shadow-lg">
        <Card className="rounded my-3  back-card" style={{ width: "10rem"  }}>
          <Card.Body className="text-center">
            <Card.Title>Sat</Card.Title>
            <Card.Img
              className=""
              variant="top"
              src="http://openweathermap.org/img/wn/11d@2x.png"
              style={{ width: "100px" }}
            />
            <Card.Text>56 47</Card.Text>
            <Card.Text>56 47</Card.Text>
          </Card.Body>
        </Card>
      
      </div>
    </Container>
  );
};

export default Templet;
