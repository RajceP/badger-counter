import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/796597/')
      .then(response => {
        setWeather(response);
      });
  }, []);

  if (weather) {
    return (
      <div>
        <img
          style={{ height: '50px' }}
          src={
            'https://www.metaweather.com/static/img/weather/' +
            weather.data.consolidated_weather[0].weather_state_abbr +
            '.svg'
          }
          alt={weather.data.consolidated_weather[0].weather_state_abbr}
        />
        <p style={{ fontWeight: 'bold' }}>{weather.data.consolidated_weather[0].the_temp.toFixed(1)} °C</p>
      </div>
    );
  } else {
    return <p>Načítám...</p>;
  }
};

export default Weather;
