import React from "react";
import { Container} from "react-bootstrap";
import NavBar from '../layout/Nav'
import Search from "../weather/Search";
import Weather from "../weather/Weather";
import GetDaysWeather from "../weather/GetDaysWeather";
import CurrentLocation from '../weather/CurrentLocation'

const Home = (props) => {
  return (
    <Container className="my-">
    
<NavBar/>
      <Search />
      <Weather />
      <GetDaysWeather />
      <CurrentLocation/>
    </Container>
  );
};

export default Home;
