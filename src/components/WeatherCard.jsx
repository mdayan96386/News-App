import React, { useContext, useEffect, useState } from "react";
import weatherContext from "../context/weather/WeatherContext";
import { fetchWeather } from "../context/WeatherService";
import NewsContext from "../context/news/NewsContext";

function WeatherCard() {
  const { weatherData, dispatch } = useContext(weatherContext);
  const { theme } = useContext(NewsContext);

  const [text, setText] = useState("");

  const getWeather = async (city) => {
    const data = await fetchWeather(city);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(text);
    setText("");
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

  if (!weatherData) {
    return (
      <div>
        <img
          src="https://i.pinimg.com/originals/a6/fd/ea/a6fdea9103b4cf10e920735e8a840a5c.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "h-30 p-4 rounded-sm border shadow col-span-1 text-gray-500"
          : "h-30 p-4 rounded-sm border shadow col-span-1"
      }
    >
      <h1 className="text-xl font-bold my-3">Today's Weather</h1>
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-bold my-1">
            {weatherData?.current.temp_c}°C
          </h1>
          <p className="text-2xl text-gray-600 my-1">
            {weatherData?.location.name}
          </p>
        </div>
        <div>
          <img
            className="h-16"
            src={weatherData.current.condition.icon}
            alt=""
          />
          <p className="text-sm text-gray-600 text-center">
            {weatherData.current.condition.text}
          </p>
        </div>
      </div>
      <form className="my-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border  p-2 mb-2 w-full "
          placeholder="Enter City Name"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-green-500 p-2 font-bold text-white w-full">
          Search
        </button>
      </form>
    </div>
  );
}

export default WeatherCard;
