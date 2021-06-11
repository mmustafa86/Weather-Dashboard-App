import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import WeatherContext from "../../context/weatherContext";
import PropTypes from "prop-types";
import moment from "moment";
// import Loading from "../layout/Loading";
import { Card, Row, Col, Spinner } from "react-bootstrap";

const CurrentLocation = (props) => {
  const weatherContext = useContext(WeatherContext);
  const [lat, setLat] = useState("");
  const [lon, setLng] = useState("");
  const [status, setStatus] = useState(null);

  const { currentLoaction, current, loading } = weatherContext;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", lon);
    currentLoaction(lat, lon);
  }, [lat, lon]);

  //   if (loading )
  //     return (
  //       <Card>
  //        <Spinner animation="grow" />{" "}
  //       </Card>
  //     );
  //     }
  return (
    <Fragment>
      <Row className="justify-content-md-center">
        {current !== null && !current.message ? (
          <Card
            className="rounded my-3 shadow-lg back-card"
            style={{ width: "30rem" }}
          >
            <Row>
              <Col>
                <img
                  className=""
                  src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                  style={{ width: "100px" }}
                />
                <h4 className="text-center pb-3">
                  {current.weather[0].description}
                </h4>
              </Col>
              <Col>
                <h3>{current.name}</h3>
                <p>Day: {moment().format("dddd")}</p>
                <p>Date: {moment().format("LL")}</p>
                <h3>{Math.round(current.main.temp)} &deg;F</h3>
              </Col>
              <Col>
                <h5>description: feels_like:</h5>

                {/* <Button onClick={() => addCity(city)}>+</Button> */}
              </Col>
            </Row>
          </Card>
        ) : (
          <Spinner animation="border" />
        )}
      </Row>
    </Fragment>
  );
};

export default CurrentLocation;
