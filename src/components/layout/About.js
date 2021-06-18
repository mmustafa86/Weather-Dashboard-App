import React from 'react'
import { Container, Jumbotron } from "react-bootstrap";

const About = props => {
    return (
        <Jumbotron fluid className="mt-5">
        <Container>
          <h3>Weather App</h3>
          <p>
            Get the current weather.
          </p>
        </Container>
      </Jumbotron>
    )
}



export default About
