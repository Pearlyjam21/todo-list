import dayjs from "dayjs";
import { Header } from "../components/header";
import React, { useState, useEffect } from "react";
import axios from "axios";
const key = import.meta.env.VITE_WEATHER_API_KEY;
import { WeatherCall } from "../components/WeatherApi";

export function Home() {
  const today = dayjs().format("dddd, MMMM D, YYYY");
  return (
    <div>
      <Header />
      <main>
        <WeatherCall />
      </main>
      {/* <pre>{JSON.stringify(weatherApi, null, 2)}</pre>
      <p>{weatherApi?.current?.temp_c}°C</p> */}
    </div>
  );
}

export default Home;
