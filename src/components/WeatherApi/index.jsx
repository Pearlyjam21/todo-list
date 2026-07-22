import React, { useState, useEffect } from "react";
import axios from "axios";
const key = import.meta.env.VITE_WEATHER_API_KEY;
import "./style.css";

export function WeatherCall() {
  const [weatherApi, setWeatherApi] = useState("");

  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          key,
          q: "Hualien",
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
  }, []);

  return (
    <div>
      <img className="imgIcon" src={weatherApi?.current?.condition?.icon} />
      <h1> {weatherApi?.current?.condition.text}</h1>
      {/*? = only continue if value exists */}
    </div>
  );
}
export default { WeatherCall };
