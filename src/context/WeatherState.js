import React, { useReducer } from "react";

import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";

import { SEARCH_WEATHER, SET_LOADING, GET_CITES } from "./types";

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    city: {},
    favWeather: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  //search weather by city
  const searchWeather = async (city) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      console.log(responseData);
      dispatch({
        type: SEARCH_WEATHER,
        payload: responseData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Add city

  const addCity = async (text) => {
    setLoading();
    try {
      const res = await fetch(
        process.env.REACT_APP_DB,
        {
          method: "POST",
          body: JSON.stringify({ text }),
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  //get added cites

  const getCites = async () => {
    try {
      const res = await fetch(
         process.env.REACT_APP_DB
      );
      const responseData = await res.json();

      console.log(responseData);

      const loadedcities = [];
      for (const data in responseData) {
        console.log(responseData[data]);
        loadedcities.push(responseData[data].text);
      }

      const arrOfPromises = await Promise.all(
        loadedcities.map(async (text) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
          );
          return res.json();
        })
      );

      dispatch({
        type: GET_CITES,
        payload:arrOfPromises
      });
      //   setFavWeather(arrOfPromises);
      //   console.log(favWeather);
    } catch (err) {
      console.log(err);
    }
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        loading: state.loading,
        favWeather: state.favWeather,
        searchWeather,
        addCity,
        getCites,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;