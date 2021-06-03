import React from 'react'
import moment from "moment";
import Card from "../layout/Card";
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
const WeatherCard = ({data}) => {


    const onClick=async()=>{

        try {
           await fetch(`https://weather-test-20a9b-default-rtdb.firebaseio.com/city.json/`, {
                method: "DELETE",
            });
        } catch (err) {
        }
    }
    return (


    <Card>
        <h1>City Name: {data.name}</h1>
        <p>Day: {moment().format("dddd")}</p>
        <p>Date: {moment().format("LL")}</p>
        {data.weather.main}
        <p>Temprature: {data.main.temp} &deg;F</p>
        <Button onClick={onClick}>Delete</Button>
      </Card>
    )
}

WeatherCard.propTypes = {
    data:PropTypes.object.isRequired
}

export default WeatherCard
