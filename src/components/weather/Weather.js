import React, { useState, Fragment, useContext } from "react";
import WeatherCard from "../layout/Card";
import moment from "moment";
import Search from "./Search";
import WeatherContext from "../../context/weatherContext";
import Loading from "../layout/Loading";
import { Button } from "semantic-ui-react";

export const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const [city, setCity] = useState("");

  const { loading, weather, addCity } = weatherContext;

  console.log(weather);

  const handleParentData = (data) => {
    console.log(data);

    setCity(data);
  };

  if (loading)
    return (
      <WeatherCard>
        <Loading />{" "}
      </WeatherCard>
    );
  return (
    <Fragment>
      <Search handleData={handleParentData} />
      {weather !== null && (
        <WeatherCard>
          <h1>City Name: {weather.name}</h1>
          <p>Day: {moment().format("dddd")}</p>
          <p>Date: {moment().format("LL")}</p>
          {weather.weather[0].main}
          <p>Temprature: {weather.main.temp} &deg;F</p>
          <Button onClick={() => addCity(city)}>+</Button>
        </WeatherCard>
      )}
    </Fragment>
  );
};

export default Weather;
