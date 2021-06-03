import React from 'react'
import './weatherIcons.css'

const WeatherIcons = props => {
    return (
        <div>
            <h1>Weather</h1>
		<div className="container">
			<div className="weather-sun">
				<div className="sun">
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
				</div>
			</div>
			<div className="weather-cloud">
				<div className="cloud"></div>
				<div className="cloud"></div>
			</div>
			<div className="weather-snow">
				<div className="snow">
					<div className="f"></div>
				</div>
			</div>
			<div className="weather-cloudAndSun">
				<div className="cloud"></div>
				<div className="sun">
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
				</div>
			</div>
			<div className="weather-rain">
				<div className="cloud"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
			</div>
		</div>
        </div>
    )
}



export default WeatherIcons
