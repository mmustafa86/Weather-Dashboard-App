import React,{Fragment} from 'react'

import Weather from '../weather/Weather'
import GetWeather from '../weather/GetWeather'
import WeatherIcons from '../layout/WeatherIcons'

export const Home = () => {
    return (
        <Fragment>

<Weather/>
<GetWeather/>
<WeatherIcons/>
        </Fragment>
    )
}


export default Home;