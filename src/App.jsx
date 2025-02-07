import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { WeatherProvider } from "./context/weather/WeatherContext";
import { NewsProvider } from "./context/news/NewsContext";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <NewsProvider>
      <WeatherProvider>
        <Navbar />
        <Home />
        <ThemeBtn/>
      </WeatherProvider>
    </NewsProvider>
  );
}

export default App;
