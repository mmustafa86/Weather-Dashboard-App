import React, { useReducer } from "react";

import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";

import {
  SEARCH_WEATHER,
  SET_LOADING,
  GET_CITES,
  GET_HOURS,
  CURRENT_LOCATION,
  CITY_ERROR,
  REMOVE_ERROR,
  GET_DAILY,
} from "./types";

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    weathers: null,
    current: null,
    daily: null,
    city: {},
    favWeather: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  //current location

  const currentLoaction = async (lat, lon) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      dispatch({
        type: CURRENT_LOCATION,
        payload: responseData,
      });
    } catch (err) {}
  };

  //get daily weather

  const GetDailyWeahter = async (lat, lon) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      dispatch({
        type: GET_DAILY,
        payload: responseData,
      });
    } catch (err) {}
  };

  //search weather by city
  const searchWeather = async (city) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      if (responseData.cod >= 400 && responseData.cod <= 600) {
        throw Error("City");
      } else {
        dispatch({
          type: SEARCH_WEATHER,
          payload: responseData,
        });
      }
    } catch (error) {
      dispatch({
        type: CITY_ERROR,
        payload: error,
      });
      setTimeout(() => {
        dispatch({ type: REMOVE_ERROR });
      }, 5000);
    }
  };

  //get hourly
  const getHourlyWeather = async (city) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=16&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      if (responseData.cod >= 400 && responseData.cod <= 600) {
        throw Error("City");
      }

      dispatch({
        type: GET_HOURS,
        payload: responseData,
      });
    } catch (err) {
      dispatch({
        type: CITY_ERROR,
        payload: err,
      });
      setTimeout(() => {
        dispatch({ type: REMOVE_ERROR });
      }, 5000);
    }
  };

  //Add city

  const addCity = async (text) => {
    setLoading();
    try {
      const res = await fetch(process.env.REACT_APP_DB, {
        method: "POST",
        body: JSON.stringify({ text }),
      });
      console.log(res);
    } catch (err) {}
  };

  //get added cites

  const getCites = async () => {
    try {
      setLoading();
      let storedNames = localStorage.getItem("city");
      let city = storedNames.toLowerCase();
      console.log(city);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      dispatch({
        type: GET_CITES,
        payload: responseData,
      });
    } catch (error) {}
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        weathers: state.weathers,
        loading: state.loading,
        favWeather: state.favWeather,
        current: state.current,
        daily: state.daily,
        error: state.error,
        searchWeather,
        currentLoaction,
        addCity,
        getCites,
        getHourlyWeather,
        GetDailyWeahter,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
