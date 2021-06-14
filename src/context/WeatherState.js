import React, { useReducer } from "react";

import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";

import { SEARCH_WEATHER, SET_LOADING, GET_CITES ,GET_DAYS,CURRENT_LOCATION,CITY_ERROR ,REMOVE_ERROR} from "./types";

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    weathers:null,
    current:null,
    city: {},
    favWeather: [],
    loading: false,
    error:null
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);


//current location 


const currentLoaction= async(lat,lon)=>{

console.log(lat ,lon)
  try {
    setLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
    );
    const responseData = await res.json();

    console.log(responseData);
    dispatch({
      type: CURRENT_LOCATION,
      payload: responseData,
    });
  } catch (err) {
    console.log(err);
  
  }


}

  //search weather by city
  const searchWeather = async (city) => {
  try{
    
    setLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_ID}`
    )
    const responseData = await res.json();

if(responseData.cod>=400 && responseData.cod<=600){
  throw Error('City')
  
 
}else{
  console.log(responseData);
  dispatch({
    type: SEARCH_WEATHER,
    payload: responseData,
  });

}


  } catch (error){
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
  const getDaysWeather = async (city) => {
    try {
      setLoading();
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&units=imperial&appid=${process.env.REACT_APP_API_ID}`
      );
      const responseData = await res.json();

      if(responseData.cod>=400 && responseData.cod<=600){
        throw Error('City')
        
      }
  
      console.log(responseData);
      dispatch({
        type: GET_DAYS,
        payload: responseData,
      });
    } catch (err) {
      console.log(err);
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
        weathers:state.weathers,
        loading: state.loading,
        favWeather: state.favWeather,
        current:state.current,
        error:state.error,
        searchWeather,
        currentLoaction,
        addCity,
        getCites,
        getDaysWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
