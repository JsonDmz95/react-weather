import React from "react";
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
  //get values from result
  const { name, main, weather } = result;

  if (!name) return null;

  //Kelvin to c
  // const celcius = parseFloat(main.temp - 273.5, 10).toFixed(2);
  const celcius = (kelvin) => {
    return parseFloat(kelvin - 273.5, 10).toFixed(2);
  };
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name}:</h2>

        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather icon"/>
        <p className="small">{weather[0].description}</p>

        <p className="temp">
          {celcius(main.temp)}
          <span>°C</span>
        </p>

        <p>
          {" "}
          Max Temp:&nbsp;
          {celcius(main.temp_max)}
          <span>°C</span>
        </p>
        <p>
          {" "}
          Min Temp:&nbsp;
          {celcius(main.temp_min)}
          <span>°C</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired
}

export default Weather;
