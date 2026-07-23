import React, { useState, useEffect } from "react";
import axios from "axios";
const key = import.meta.env.VITE_WEATHER_API_KEY;
import "./style.css";
import { use } from "react";

export function WeatherCall() {
  const [weatherApi, setWeatherApi] = useState("");
  const [cityApi, setCityApi] = useState("");

  function getWeather() {
    //cannot use useEffect inside of a function
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          key,
          q: cityApi.trim(),
          aqi: "no",
        },
      })
      .then((res) => {
        setWeatherApi(res.data);
        console.log("successfully got data");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input onChange={(e) => setCityApi(e.target.value)}></input>
      <button onClick={getWeather}></button>
      <img className="imgIcon" src={weatherApi?.current?.condition?.icon} />
      <h1> {weatherApi?.current?.condition.text}</h1>
      <h1> Temp = {weatherApi?.current?.temp_c}</h1>

      {/*? = only continue if value exists */}
    </div>
  );
}
export default { WeatherCall };
