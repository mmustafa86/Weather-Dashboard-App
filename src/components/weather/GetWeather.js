import React, { useState, useEffect ,useContext} from "react";
import FavWeather from "./FavWeather";
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
        favWeather.map((fav) => <FavWeather key={fav.id} data={fav} />)}
    </div>
  );
};

export default GetWeather;
