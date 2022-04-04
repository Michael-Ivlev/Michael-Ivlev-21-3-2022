import React, { useEffect } from "react";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import accuWeatherApi from "../utils/accuweatherApi";
import { useDispatch } from "react-redux";
import { chnageWeatherDays } from "../features/weatherToShow";
import { chnageWeatherCurrent } from "../features/weatherToShow";
import { initialFavoriteCards } from "../features/favoriteCards";
import { initialFavoriteCardsRender } from "../features/favoriteCardsRender";

function GlobalStateInitialSetters() {
  const dispatch = useDispatch();
  const userSelectionKey = useSelector((state) => state.userSelectionKey.value);
  const favoriteCards = useSelector((state) => state.favoriteCards.value);

  // gets the favorite cards from localstorage if exist
  useEffect(() => {
    const localStorageFavorites = JSON.parse(
      localStorage.getItem("savedFavorites")
    );
    if (!localStorageFavorites) {
      return;
    }
    dispatch(initialFavoriteCards(localStorageFavorites));
  }, []); // render only once when the page loads

  useEffect(() => {
    const fetchWeather = async () => {
      // begin the asynchronous operations
      const promises = favoriteCards.map((card) =>
        accuWeatherApi
          .getCurrentWeather(card.key)
          .then((res) => {
            return {
              name: card.name,
              id: card.key,
              ...res[0],
            };
          })
          .catch((err) => console.log(err))
      );

      // wait for all of them to complete
      const results = await Promise.all(promises);
      // add the cards with there data so they can be rendered
      dispatch(initialFavoriteCardsRender(results));
    };
    fetchWeather();
  }, [favoriteCards]);

  // gets the 5days weather and current weather and formats them based on userSelectionKey
  useEffect(() => {
    if (userSelectionKey.key !== "") {
      accuWeatherApi
        .get5DaysWeather(userSelectionKey.key)
        .then((res) => {
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
        })
        .catch((err) => console.log(err));

      accuWeatherApi
        .getCurrentWeather(userSelectionKey.key)
        .then((res) => {
          const format = {
            name: userSelectionKey.name,
            key: userSelectionKey.key,
            text: res[0].WeatherText,
            temp: res[0].Temperature.Metric.Value,
            icon: res[0].WeatherIcon,
          };
          dispatch(chnageWeatherCurrent(format));
        })
        .catch((err) => console.log(err));
    }
  }, [userSelectionKey]);

  useEffect(() => {
    // when favritueCards global state changes, it adds it to the localStorage for later use
    const save = favoriteCards.map((card) => {
      return {
        name: card.name,
        key: card.key,
      };
    });
    localStorage.setItem("savedFavorites", JSON.stringify(save));
  }, [favoriteCards]);
  return null;
}

export default GlobalStateInitialSetters;
