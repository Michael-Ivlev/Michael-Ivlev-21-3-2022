import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DaysCard from "../DaysCard/DaysCard";
import { useDispatch } from "react-redux";
import "./BigWeather.css";
import { changeFavoriteCards } from "../../features/favoriteCards";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function BigWeather() {
  const dispatch = useDispatch();
  const weathertoShow = useSelector((state) => state.weatherToShow.value);
  const favoriteCards = useSelector((state) => state.favoriteCards.value);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // changes the value of saved if the location saved to favorite cards
    const findIndex = favoriteCards.findIndex((fav) => {
      return fav.key === weathertoShow.current.key;
    });
    if (findIndex === -1) {
      setIsSaved(false);
    }
    if (findIndex > -1) {
      setIsSaved(true);
    }
    return null;
  }, [favoriteCards, weathertoShow]);

  const onSave = () => {
    dispatch(
      changeFavoriteCards({
        name: weathertoShow.current.name,
        key: weathertoShow.current.key,
      })
    );
  };

  return (
    <div className="bigweather">
      <div className="current-weather">
        <div className="current-weather__container">
          <h2 className="current-weather__cityname">
            {weathertoShow.current.name}
          </h2>
          <p className="current-weather__temp">{weathertoShow.current.temp}°</p>
          <p className="current-weather__text">{weathertoShow.current.text}</p>
        </div>
        <div className="current-weather__container2">
          {" "}
          <img
            className="current-weather__icon"
            src={`icons/${weathertoShow.current.icon}.PNG`}
            alt="Weather Icon"
          />
          {isSaved ? (
            <IconButton aria-label="saved" onClick={onSave}>
              <StarIcon className="current-weather__saved" fontSize="large" />
            </IconButton>
          ) : (
            <IconButton aria-label="save" onClick={onSave}>
              <StarBorderIcon
                className="current-weather__save"
                fontSize="large"
              />
            </IconButton>
          )}
        </div>
      </div>
      <h3 className="days-weather__title">Daily</h3>
      <div className="days-weather">
        {weathertoShow.days.map((item) => {
          return (
            <DaysCard
              day={item.date}
              tempMax={item.maximum}
              tempMin={item.minimum}
              text={item.text}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BigWeather;
