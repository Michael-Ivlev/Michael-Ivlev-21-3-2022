import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import BigWeather from "../BigWeather/BigWeather";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Get the Weather</h1>
      <Link to="/favorites">About</Link>
      <SearchForm />
      <BigWeather />
    </main>
  );
}

export default Main;
