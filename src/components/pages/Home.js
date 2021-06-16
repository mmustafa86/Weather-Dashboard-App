import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../layout/Nav";
import Search from "../weather/Search";
import Weather from "../weather/Weather";
import GetHourlyWeather from "../weather/GetHourlyWeather";
import CurrentLocation from "../weather/CurrentLocation";
import GetDailyWeahter from '../weather/GetDailyWeahter'
import { Switch, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <Container className="my-">
      <NavBar />
      <Switch>
        <Route path="/" exact  >
        <CurrentLocation/>
        <GetDailyWeahter/>

        </Route>
        <Route path="/search" exact>
          <Search />
          <Weather />
          <GetHourlyWeather />
        </Route>
      </Switch>
    </Container>
  );
};

export default Home;
