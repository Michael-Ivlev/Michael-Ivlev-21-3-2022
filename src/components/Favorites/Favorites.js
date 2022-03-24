import React, { useEffect } from "react";
import CardFavorite from "../CardFavorite/CardFavorite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import Navbar from "../Navbar/Navbar";

function Favorites() {
  const favoriteCards = useSelector((state) => state.favoriteCards.value);
  useEffect(() => {
    console.log(favoriteCards);
  }, []);

  return (
    <div className="favorites">
      <Navbar linkName="Home" link="/" />
      <h1 className="favorites__title">Favorites</h1>
      <div className="favorites__cards-container">
        {favoriteCards === []
          ? null
          : favoriteCards.map((card) => {
              return <CardFavorite name={card.name} id={card.key} />;
            })}
      </div>
    </div>
  );
}

export default Favorites;
