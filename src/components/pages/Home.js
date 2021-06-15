import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../layout/Nav";
import Search from "../weather/Search";
import Weather from "../weather/Weather";
import GetDaysWeather from "../weather/GetDaysWeather";
import CurrentLocation from "../weather/CurrentLocation";
import { Switch, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <Container className="my-">
      <NavBar />
      <Switch>
        <Route path="/" exact component={CurrentLocation} />
        <Route path="/search" exact>
          <Search />
          <Weather />
          <GetDaysWeather />
        </Route>
      </Switch>
    </Container>
  );
};

export default Home;
