import React, { useState, useEffect, Fragment } from "react";
import WeatherCard from "../layout/Card";
import axios from "axios";
import moment from "moment";
import Search from "./Search";
import Loading from "../layout/Loading";
export const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (city) {
      getWeather();
    }
    // eslint-disable-next-line
  }, [city]);

  const getWeather = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_ID}`
      );

      console.log(res.data);
      setWeatherData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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


      {weatherData ? (
        <WeatherCard>
          <h1>City Name: {weatherData.name}</h1>
          <p>Day: {moment().format("dddd")}</p>
          <p>Date: {moment().format("LL")}</p>
          {weatherData.weather[0].main}
          <p>Temprature: {weatherData.main.temp} &deg;C</p>
        </WeatherCard>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Weather;
