import React, { Fragment, useContext, useEffect } from "react";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import { Card, Col, Row } from "react-bootstrap";
import {usePosistion}  from '../../Middleware/Geolocation'
import "./GetHourly.scss";

export const GetDailyWeahter = () => {
  const weatherContext = useContext(WeatherContext);
 

  const {  daily, GetDailyWeahter } = weatherContext;
  const{latitude,longitude}=usePosistion()


console.log(longitude,latitude)

  useEffect(() => {

      GetDailyWeahter(latitude, longitude);
    // }else {
    //     console.log("Geolocation is not supported by this browser.") 
    //  }
     // eslint-disable-next-line
  }, [latitude, longitude]);

  return (
    <Fragment>
      <div className="d-flex justify-content-center mb-3 container">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-2 pt-3 shadow-lg ">
          {daily !== null && !daily.message ? (
            daily.daily.map((weather) => (
              <Row>
              <Col >
                <Card
                  className="rounded my-3  back-card card-block"
                  style={{ width: "10rem", height: "17rem" }}
                  key={weather.dt}
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
              
              </Row>
            
            ))
          ) : (
            <div></div>
          )}
        </div>
       
      </div>
      {/* {daily !== null && !daily.message && (
        <Row>
                <Col className="d-flex justify-content-center mb-3 container">
                  <div>{daily.alerts[0].description}</div>
                </Col>
              </Row>
              )} */}
    </Fragment>
  );
};

export default GetDailyWeahter;
