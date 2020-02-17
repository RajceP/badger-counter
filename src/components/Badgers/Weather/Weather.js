import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/796597/')
      .then(response => {
        setWeather(response);
      });
  }, []);

  console.log(weather);

  if (weather) {
    return (
      <div>
        <p style={{fontWeight: 'bold'}}>{weather.data.consolidated_weather[0].the_temp} °C</p>
      </div>
    );
  } else {
    return <p>Načítám...</p>;
  }
};

export default Weather;
