import React, { useState, useEffect ,useContext} from "react";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../../context/weatherContext";
const GetWeather = () => {
  // const [favWeather, setFavWeather] = useState("");

  const weatherContext = useContext(WeatherContext);

  const { loading,favWeather,getCites } = weatherContext;

  useEffect(() => {
    getCites();

    // eslint-disable-next-line
  }, []);




  return (
    <div>
      {favWeather.length > 0 &&
        favWeather.map((fav) => <WeatherCard data={fav} />)}
    </div>
  );
};

export default GetWeather;
