import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import BigWeather from "../BigWeather/BigWeather";

function Main() {
  return (
    <div>
      <h1>Get the Weather</h1>
      <SearchForm />
      <BigWeather />
    </div>
  );
}

export default Main;
