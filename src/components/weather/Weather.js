import React, { Fragment, useContext } from "react";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import Error from "../layout/Error";
import { Card, Row, Col } from "react-bootstrap";
import WeatherIcons from "../layout/WeatherIcons";
import "./Error.css";

export const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const { loading, weather, error } = weatherContext;

  // const saveCity = () => {
  //   localStorage.setItem("city", weather.name);
  // };

  if (error)
    return (
      <Row className="justify-content-md-center">
        <Error />
      </Row>
    );

  if (loading) {
    return <WeatherIcons />;
  }

  return (
    <Fragment>
      <Row className="justify-content-md-center">
        {weather !== null && (
          <Card
            className="rounded my-3 shadow-lg back-card"
            style={{ width: "40rem" }}
          >
            <Row>
              <Col className="text-start m-3">
                <h3>{weather.name}</h3>
                <p>
                  {" "}
                  {moment().format("dddd")} {moment().format("LL")}
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col>
                <img
                  alt="..."
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  style={{ width: "140px" }}
                />
                <h5 className="text-center pb-3">
                  {weather.weather[0].description}
                </h5>
              </Col>
              <Col className="m-4">
                <h1>{Math.round(weather.main.temp)} &deg;F</h1>
                <p>
                  H:{Math.round(weather.main.temp_max)}&deg;F / L:
                  {Math.round(weather.main.temp_min)}&deg;F
                </p>
              </Col>
              <Col className="m-4">
                <h5>Feels Like:{Math.round(weather.main.feels_like)}&deg;F</h5>
                <h5>Humidity:{Math.round(weather.main.humidity)}%</h5>
              </Col>
            </Row>
          </Card>
        )}
      </Row>
    </Fragment>
  );
};

export default Weather;
