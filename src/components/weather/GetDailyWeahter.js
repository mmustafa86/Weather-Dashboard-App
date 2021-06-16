import React, { useState, Fragment, useContext, useEffect } from "react";
// import Card from "../layout/Card";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import { Card, Row, Col } from "react-bootstrap";
import "./GetHourly.scss";

export const GetDailyWeahter = () => {
  const weatherContext = useContext(WeatherContext);
  const [lat, setLat] = useState("");
  const [lon, setLng] = useState("");
  const [city, setCity] = useState("");

  const { loading, daily, GetDailyWeahter, error } = weatherContext;

  console.log(daily);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
      console.log("Latitude is:", lat);
      console.log("Longitude is:", lon);
      GetDailyWeahter(lat, lon);
    }else {
        console.log("Geolocation is not supported by this browser.") 
     }
  }, [lat, lon]);

  //   if (error)
  //     return (
  //       <Card>
  //         {/* <p>Error</p> */}
  //       </Card>
  //     );
  return (
    <Fragment>
      <div>{daily !== null && !daily.message ? <div></div> : ""}</div>
      <div className="d-flex justify-content-center mb-3 container">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-2 pt-3 shadow-lg ">
          {daily !== null && !daily.message ? (
            daily.daily.map((weather) => (
              <Col key={weather.dt}>
                <Card
                  className="rounded my-3  back-card card-block"
                  style={{ width: "10rem", height: "17rem" }}
                >
                  <Card.Body className="text-center">
                    <Card.Title>
                      {moment.unix(`${weather.dt}`).format(" dddd")}
                    </Card.Title>
                    <Card.Img
                      className=""
                      variant="top"
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      style={{ width: "100px" }}
                    />
                    <Card.Text>{weather.weather[0].description}</Card.Text>
                    <Card.Text>
                      {Math.round(weather.temp.max)}&deg;F /
                      {Math.round(weather.temp.min)}&deg;F
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default GetDailyWeahter;
