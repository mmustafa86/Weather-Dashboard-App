import React, { useState, Fragment, useContext } from "react";
// import Card from "../layout/Card";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import Loading from "../layout/Loading";
import { Card, Row, Col } from "react-bootstrap";
import { Button } from "semantic-ui-react";

export const GetDaysWeather = () => {
  const weatherContext = useContext(WeatherContext);

  const [city, setCity] = useState("");

  const { loading, weathers, addCity } = weatherContext;

  console.log(weathers);

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
     <div class="d-flex justify-content-center mb-3 shadow-lg">
    {weathers !== null ? weathers.list.map(weather=>(
         
        <Card className="rounded my-3  back-card" style={{ width: "10rem"  }}>
          <Card.Body className="text-center">
            <Card.Title>{moment(`${weather.dt_txt}`).format(' h:mm:ss a')}</Card.Title>
            <Card.Img
              className=""
              variant="top"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              style={{ width: "100px" }}
            />
            <Card.Text>{weather.weather[0].description}</Card.Text>
            <Card.Text>{weather.main.temp_max}/{weather.main.temp_min}</Card.Text>
          </Card.Body>
        </Card>
      
    
    )) : <div></div>
       
    
    }
    </div>
      </Fragment>
  
  );
};

export default GetDaysWeather;
