import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import accuWeatherApi from "../../utils/accuweatherApi";
import { useDispatch } from "react-redux";
import { changeFavoriteCards } from "../../features/favoriteCards";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./CardFavorite.css";
import { changeUserSelectionKey } from "../../features/userSelectionKey";
import { useNavigate } from "react-router-dom";

const testcurrent = [
  {
    name: "Telanaipura",
    key: "3431644",
    WeatherText: "Partly cloudy",
    Temperature: {
      Metric: {
        Value: 26,
      },
    },
    WeatherIcon: 6,
  },
];
function CardFavorite(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const favoriteCards = useSelector((state) => state.favoriteCards.value);

  const onSave = () => {
    dispatch(
      changeFavoriteCards({
        name: props.name,
        key: props.id,
      })
    );
  };

  const onCardClick = () => {
    const path = "/";
    navigate(path);
    dispatch(
      changeUserSelectionKey({
        name: props.name,
        key: props.id,
      })
    );
  };

  useEffect(() => {
    // accuWeatherApi.getCurrentWeather(props.id).then((res) => {
    //   setCardInfo(res);
    // });
    setCardInfo(testcurrent);
  }, []);
  console.log(cardInfo);

  useEffect(() => {
    const findIndex = favoriteCards.findIndex((fav) => {
      return fav.key === props.id;
    });
    if (findIndex === -1) {
      setIsSaved(false);
    }
    if (findIndex > -1) {
      setIsSaved(true);
    }
    return null;
  }, [favoriteCards]);

  return (
    <div className="card-favorite">
      {isSaved ? (
        <IconButton aria-label="saved" onClick={onSave}>
          <StarIcon className="card-favorite__saved" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton aria-label="save" onClick={onSave}>
          <StarBorderIcon className="card-favorite__save" fontSize="large" />
        </IconButton>
      )}
      <div className="card-favorite__container" onClick={onCardClick}>
        <img
          className="card-favorite__icon"
          src={cardInfo ? `icons/${cardInfo[0].WeatherIcon}.PNG` : null}
          alt="Weather Icon"
        />
        <h3 className="card-favorite__name">{props.name}</h3>
        <p className="card-favorite__temp">
          {cardInfo ? cardInfo[0].Temperature.Metric.Value + "°" : null}
        </p>
        <p className="card-favorite__info">
          {" "}
          {cardInfo ? cardInfo[0].WeatherText : null}
        </p>
      </div>
    </div>
  );
}

export default CardFavorite;
