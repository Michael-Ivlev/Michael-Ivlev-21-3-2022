import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import dateFormat from "dateformat";
import "./App.css";
import Main from "./components/Main/Main";
import { useSelector } from "react-redux";
import accuWeatherApi from "./utils/accuweatherApi";
import { useDispatch } from "react-redux";
import { chnageWeatherDays } from "./features/weatherToShow";
import { chnageWeatherCurrent } from "./features/weatherToShow";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const dispatch = useDispatch();
  const userSelectionKey = useSelector((state) => state.userSelectionKey.value);
  const weathertoShow = useSelector((state) => state.weatherToShow.value);
  // enable when not on test
  useEffect(() => {
    if (userSelectionKey.key !== "") {
      accuWeatherApi.get5DaysWeather(userSelectionKey.key).then((res) => {
        const formatArray = res.DailyForecasts.map((day) => {
          return {
            date: dateFormat(day.Date, "dddd"),
            minimum: day.Temperature.Minimum.Value,
            maximum: day.Temperature.Maximum.Value,
            text: day.Day.IconPhrase,
            icon: day.Day.Icon,
          };
        });
        dispatch(chnageWeatherDays(formatArray));
      });

      accuWeatherApi.getCurrentWeather(userSelectionKey.key).then((res) => {
        const format = {
          name: userSelectionKey.name,
          key: userSelectionKey.key,
          text: res[0].WeatherText,
          temp: res[0].Temperature.Metric.Value,
          icon: res[0].WeatherIcon,
        };
        dispatch(chnageWeatherCurrent(format));
      });
    }
  }, [userSelectionKey]);

  // console.log(userSelectionKey);

  // const testcurrent = {
  //   name: "Telanaipura",
  //   key: "3431644",
  //   text: "Partly cloudy",
  //   temp: 26.2,
  // };
  // const testDys = [
  //   {
  //     date: "Tuesday",
  //     minimum: 48,
  //     maximum: 59,
  //     text: "Partly sunny",
  //   },
  //   {
  //     date: "Wednesday",
  //     minimum: 49,
  //     maximum: 58,
  //     text: "Partly sunny w/ showers",
  //   },
  //   {
  //     date: "Thursday",
  //     minimum: 51,
  //     maximum: 58,
  //     text: "Rain",
  //   },
  //   {
  //     date: "Friday",
  //     minimum: 51,
  //     maximum: 59,
  //     text: "Showers",
  //   },
  //   {
  //     date: "Saturday",
  //     minimum: 51,
  //     maximum: 62,
  //     text: "Mostly sunny",
  //   },
  // ];

  // useEffect(() => {
  //   if (userSelectionKey.key !== "") {
  //     dispatch(chnageWeatherDays(testDys));
  //     dispatch(chnageWeatherCurrent(testcurrent));
  //   }
  // }, [userSelectionKey]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
