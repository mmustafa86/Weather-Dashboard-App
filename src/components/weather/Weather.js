import React, { useState, Fragment, useContext } from "react";
// import Card from "../layout/Card";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import Error from '../layout/Error'
import Loading from "../layout/Loading";
import {

  Card,
  Row,
  Col,

} from "react-bootstrap";


export const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const [city, setCity] = useState("");

  const { loading, weather, addCity ,error} = weatherContext;

  console.log(weather);

  const handleParentData = (data) => {
    console.log(data);

    setCity(data);
  };

  if (error)
    return (
      <Row className="justify-content-md-center">
       <Error/>
      </Row>
    );

  return (
    <Fragment>
 <Row className="justify-content-md-center">

      {weather !== null  &&(
       
          <Card
            className="rounded my-3 shadow-lg back-card"
            style={{ width: "40rem" }}
          >
            <Row>
              <Col >
                <img
                className=""
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  style={{ width: "100px" }}
                />
                <h4 className="text-center pb-3">{weather.weather[0].description}</h4>
              </Col>
              <Col>
                <h3>{weather.name}</h3>
                <p>Day: {moment().format("dddd")}</p>
                <p>Date: {moment().format("LL")}</p>
                <h3>{Math.round(weather.main.temp)} &deg;F</h3>
              </Col>
              <Col>
                <h5>description: feels_like:</h5>

                {/* <Button onClick={() => addCity(city)}>+</Button> */}
              </Col>
            </Row>
          </Card>
       
      )}
       </Row>
    </Fragment>
  );
};

export default Weather;
