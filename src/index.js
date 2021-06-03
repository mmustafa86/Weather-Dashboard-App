import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherState from './context/WeatherState'

ReactDOM.render(
  <WeatherState>
    <App />
    </WeatherState>
  ,
  document.getElementById('root')
);
