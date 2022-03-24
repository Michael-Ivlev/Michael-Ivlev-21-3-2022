import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import BigWeather from "../BigWeather/BigWeather";

import { Link } from "react-router-dom";

import "./Main.css";
import Navbar from "../Navbar/Navbar";

function Main() {
  const userSelectionKey = useSelector((state) => state.userSelectionKey.value);

  return (
    <main className="main">
      <Navbar linkName="Favorites" link="/favorites" />
      <SearchForm />
      {userSelectionKey.key === "" ? null : <BigWeather />}
    </main>
  );
}

export default Main;
