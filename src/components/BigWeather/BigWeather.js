import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DaysCard from "../DaysCard/DaysCard";
import { useDispatch } from "react-redux";
import "./BigWeather.css";
import { changeFavoriteCards } from "../../features/favoriteCards";
import Button from "@mui/material/Button";

const testArray = {
  Headline: {
    EffectiveDate: "2022-03-23T19:00:00+02:00",
    EffectiveEpochDate: 1648054800,
    Severity: 3,
    Text: "Expect rainy weather Wednesday evening through Thursday evening",
    Category: "rain",
    EndDate: "2022-03-25T01:00:00+02:00",
    EndEpochDate: 1648162800,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2022-03-22T07:00:00+02:00",
      EpochDate: 1647925200,
      Temperature: {
        Minimum: {
          Value: 8.8,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 14.8,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2022-03-23T07:00:00+02:00",
      EpochDate: 1648011600,
      Temperature: {
        Minimum: {
          Value: 9.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 14.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2022-03-24T07:00:00+02:00",
      EpochDate: 1648098000,
      Temperature: {
        Minimum: {
          Value: 10.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 14.2,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2022-03-25T07:00:00+02:00",
      EpochDate: 1648184400,
      Temperature: {
        Minimum: {
          Value: 10.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 14.8,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2022-03-26T07:00:00+02:00",
      EpochDate: 1648270800,
      Temperature: {
        Minimum: {
          Value: 10.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 16.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    },
  ],
};

function BigWeather() {
  const dispatch = useDispatch();
  const weathertoShow = useSelector((state) => state.weatherToShow.value);
  console.log(weathertoShow);

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
        <div className="current-weather__container">
          <img
            className="current-weather__icon"
            src={`icons/${weathertoShow.current.icon}.PNG`}
            alt="Weather Icon"
          />
          <Button onClick={onSave} variant="outlined">
            Save
          </Button>
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
