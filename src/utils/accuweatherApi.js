import React, { Component } from "react";

class AccuWeatherApi extends Component {
  constructor(props) {
    super(props);
    this.apiKey = props.apiKey;
  }

  _getResponseData(res) {
    console.log(res);
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getAutoComplite(word) {
    return fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${word}&language=en-us`,
      {
        method: "GET",
      }
    ).then((res) => this._getResponseData(res));
  }

  get5DaysWeather(Key) {
    return fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${this.apiKey}&metric=true`,
      {
        method: "GET",
      }
    ).then((res) => this._getResponseData(res));
  }

  getCurrentWeather(Key) {
    return fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${this.apiKey}`,
      {
        method: "GET",
      }
    ).then((res) => this._getResponseData(res));
  }
}

const accuWeatherApi = new AccuWeatherApi({
  apiKey: "RMDWAeLva2JVOO5KMv1GXINSStMvjVxt",
});

export default accuWeatherApi;
