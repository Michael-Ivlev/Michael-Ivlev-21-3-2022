import React, { useEffect } from "react";
import CardFavorite from "../CardFavorite/CardFavorite";
import SavedCard from "../SavedCard/SavedCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Favorites() {
  const favoriteCards = useSelector((state) => state.favoriteCards.value);
  useEffect(() => {
    console.log(favoriteCards);
  }, []);

  return (
    <div className="favorites">
      <Link to="/">About</Link>
      <h1>Favorites</h1>
      {favoriteCards === []
        ? null
        : favoriteCards.map((card) => {
            return <CardFavorite name={card.name} id={card.key} />;
          })}
    </div>
  );
}

export default Favorites;
