import React from "react";
import CardFavorite from "../CardFavorite/CardFavorite";
import { useSelector } from "react-redux";
import "./Favorites.css";
import Navbar from "../Navbar/Navbar";

function Favorites() {
  const favoriteCards = useSelector((state) => state.favoriteCards.value);
  // array of favorite cards to render
  const favoriteCardsRender = useSelector(
    (state) => state.favoriteCardsRender.value
  );

  return (
    <div className="favorites">
      <Navbar linkName="Home" link="/" />
      <h1 className="favorites__title">Favorites</h1>
      <div className="favorites__cards-container">
        {favoriteCards === []
          ? null
          : favoriteCardsRender.map((card) => {
              return (
                <CardFavorite
                  id={card.id}
                  name={card.name}
                  WeatherText={card.WeatherText}
                  WeatherIcon={card.WeatherIcon}
                  Temperature={card.Temperature.Metric.Value}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Favorites;
