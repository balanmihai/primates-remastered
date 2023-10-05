"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Weather() {
  const API_KEY = "03e2d59d88f1fb4759e7db6aba7de8d5";
  const [weather, setWeather] = useState<any>({});
  const city = "Bucharest";

  async function getWeatherData() {
    try {
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          city +
          "&appid=" +
          API_KEY +
          "&units=metric"
      );
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      <img src={"//http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png"} width={100}  alt="" />
      <div>{weather.name}</div>
      <div>{weather.main.temp} &deg;C</div>
    </div>
  );
}
