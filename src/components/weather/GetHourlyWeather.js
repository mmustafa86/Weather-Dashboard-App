import React, { Fragment, useContext } from "react";
// import Card from "../layout/Card";
import moment from "moment";
import WeatherContext from "../../context/weatherContext";
import { Card ,Col} from "react-bootstrap";
import './GetHourly.scss'

export const GetHourlyWeather = () => {
  const weatherContext = useContext(WeatherContext);


  const { weathers ,error} = weatherContext;

  if (error)
    return (
      <Card>
        {/* <p>Error</p> */}
      </Card>
    );
  return (
      
    <Fragment>
     <div className="d-flex justify-content-center mb-3 container">
     <div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-2 pt-3 shadow-lg ">
    {weathers !== null  ? weathers.list.map(weather=>(
         <Col>
        <Card className="rounded my-3  back-card card-block" style={{ width: "10rem" ,height:"17rem"}}>
          <Card.Body className="text-center">
            <Card.Title>{moment(`${weather.dt_txt}`).format(' h:mm:ss a')}</Card.Title>
            <Card.Img
              className=""
              variant="top"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              style={{ width: "100px" }}
            />
            <Card.Text>{weather.weather[0].description}</Card.Text>
            <Card.Text>{Math.round(weather.main.temp_max)}&deg;F  /{Math.round(weather.main.temp_min)}&deg;F</Card.Text>
          </Card.Body>
        </Card>
        </Col>
    
    )) : <div></div>
       
    
    }
    </div>
    </div>
      </Fragment>
  
  );
};

export default GetHourlyWeather;
