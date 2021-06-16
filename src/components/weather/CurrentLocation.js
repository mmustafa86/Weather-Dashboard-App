import React, {
  useState,
  useContext,
  useEffect,
  Fragment,
} from "react";

import { BsArrowRepeat } from "react-icons/bs";
import WeatherContext from "../../context/weatherContext";
import PropTypes from "prop-types";
import moment from "moment";
// import Loading from "../layout/Loading";
import { Card, Row, Col, Spinner ,Button} from "react-bootstrap";
import WeatherIcons from '../layout/WeatherIcons'

const CurrentLocation = (props) => {
  const weatherContext = useContext(WeatherContext);
  const [lat, setLat] = useState("");
  const [lon, setLng] = useState("");
  const [temp, updateTemp] =useState({ f: 0, c: 0 })
  const [action, setAction] =useState(null)

  const { currentLoaction, current, loading } = weatherContext;

  useEffect(() => {

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitude is:", lon);
    currentLoaction(lat, lon);
}else {
   console.log("Geolocation is not supported by this browser.") 
}
  }, [lat, lon]);
  

  const refresh = () => {
    window.location.reload();
  }

  //   if (loading )
  //     return (
  //       <Card>
  //        <Spinner animation="grow" />{" "}
  //       </Card>
  //     );
  //     }
  const convertToC=()=>{
 
  const c= ((current.main.temp - 32) * 5 / 9).toFixed(2)
  updateTemp({f:0,c:c})
  setAction(prevState=> ({ ...prevState,action:'C'}))
  console.log(temp)
  console.log(action)
  }

  const convertToF=()=>{
    
    const f= (temp.c * 9 / 5 + 32).toFixed(2)
    updateTemp({f:f ,c:temp.c})
  
    
    }
    console.log(temp)
    console.log(action)
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
            

                {/* <Button onClick={() => addCity(city)}>+</Button> */}
              </Col>
              {/* <Col>
           test
              </Col> */}
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
