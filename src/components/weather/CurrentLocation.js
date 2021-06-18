import React, {
  useContext,
  useEffect,
  Fragment,
} from "react";

import { BsArrowRepeat } from "react-icons/bs";
import WeatherContext from "../../context/weatherContext";

import moment from "moment";
import { Card, Row, Col ,Button} from "react-bootstrap";
import WeatherIcons from '../layout/WeatherIcons'
import {usePosistion}  from '../../Middleware/Geolocation'

const CurrentLocation = (props) => {
  const weatherContext = useContext(WeatherContext);
  const{latitude,longitude}=usePosistion()
  const { currentLoaction, current } = weatherContext;

  useEffect(() => {

    currentLoaction(latitude, longitude);
 // eslint-disable-next-line
  }, [latitude, longitude]);
  

  const refresh = () => {
    window.location.reload();
  }


  // const convertToC=()=>{
 
  // const c= ((current.main.temp - 32) * 5 / 9).toFixed(2)
  // updateTemp({f:0,c:c})
  // setAction(prevState=> ({ ...prevState,action:'C'}))
  // console.log(temp)
  // console.log(action)
  // }

  // const convertToF=()=>{
    
  //   const f= (temp.c * 9 / 5 + 32).toFixed(2)
  //   updateTemp({f:f ,c:temp.c})
  
    
  //   }

  return (
    <Fragment>
      <Row className="justify-content-md-center">
        {current !== null && !current.message ? (
          <Card
            className="rounded my-3 shadow-lg back-card"
            style={{ width: "40rem" }}
          >
           <Row>
              <Col className="text-start m-3"><h3>{current.name}</h3>
              <p> {moment().format("dddd")} {moment().format("LL")}</p> 
              
               </Col>
               {/* <Col className="text-center m-3"><Button onClick={convertToC}> C </Button>|<Button onClick={convertToF}> F </Button></Col> */}
               <Col className="d-flex justify-content-end">
               <Button className="button"  variant="light"  icon='refresh' onClick={refresh} >
             <BsArrowRepeat/>
              </Button>
              </Col>
            
              </Row>
            <Row className="d-flex justify-content-center">
              <Col>
             <img
               alt="..."
                  src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                  style={{ width: "140px" }}
                />
                <h5 className="text-center pb-3">
                  {current.weather[0].description}
                </h5>
              </Col>
              <Col className="m-4">
              
                <h1  >{Math.round(current.main.temp)} &deg;F</h1>
                <p>H:{Math.round(current.main.temp_max)}&deg;F / L:{Math.round(current.main.temp_min)}&deg;F</p>
               
              </Col>
              <Col className="m-4"> 
              <h5>Feels Like:{Math.round(current.main.feels_like)}&deg;F</h5>
              <h5>Humidity:{Math.round(current.main.humidity)}%</h5>
            
              </Col>
          
            </Row>
          </Card>
        ) : (
          <WeatherIcons  />
        )}
      </Row>
    </Fragment>
  );
};

export default CurrentLocation;
