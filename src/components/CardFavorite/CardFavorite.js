import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { changeFavoriteCards } from "../../features/favoriteCards";

import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./CardFavorite.css";
import { changeUserSelectionKey } from "../../features/userSelectionKey";
import { useNavigate } from "react-router-dom";

function CardFavorite(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    // change the selected card on click to change it in the main page
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
    // sets saved icon based on the saved cards in the global state
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
          src={`icons/${props.WeatherIcon}.PNG`}
          alt="Weather Icon"
        />
        <h3 className="card-favorite__name">{props.name}</h3>
        <p className="card-favorite__temp">{`${props.Temperature}`}</p>
        <p className="card-favorite__info">{props.WeatherText}</p>
      </div>
    </div>
  );
}

export default CardFavorite;
