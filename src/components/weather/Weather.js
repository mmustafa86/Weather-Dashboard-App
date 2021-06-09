import React, { useState, Fragment, useContext } from "react";
// import Card from "../layout/Card";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import Loading from "../layout/Loading";
import {
  Container,
  Form,
  FormControl,
  Card,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Button } from "semantic-ui-react";

export const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const [city, setCity] = useState("");

  const { loading, weather, addCity } = weatherContext;

  console.log(weather);

  const handleParentData = (data) => {
    console.log(data);

    setCity(data);
  };

  if (loading)
    return (
      <Card>
        <Loading />{" "}
      </Card>
    );
  return (
    <Fragment>
      {weather !== null && (
        <Row className="justify-content-md-center">
          <Card
            className="rounded my-3 shadow-lg back-card"
            style={{ width: "30rem" }}
          >
            <Row>
              <Col >
                <img
                
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  style={{ width: "100px" }}
                />
                <h4 class="text-center">{weather.weather[0].description}</h4>
              </Col>
              <Col>
                <h3>{weather.name}</h3>
                <p>Day: {moment().format("dddd")}</p>
                <p>Date: {moment().format("LL")}</p>
                <h3>{weather.main.temp} &deg;F</h3>
              </Col>
              <Col>
                <h5>description: feels_like:</h5>

                {/* <Button onClick={() => addCity(city)}>+</Button> */}
              </Col>
            </Row>
          </Card>
        </Row>
      )}
    </Fragment>
  );
};

export default Weather;
