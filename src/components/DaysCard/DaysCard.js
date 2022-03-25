import React from "react";
import "./DaysCard.css";

export default function DaysCard(props) {
  return (
    <div className="days-card">
      <img
        className="days-card__icon"
        src={`icons/${props.icon}.PNG`}
        alt="Weather Icon"
      />
      <h3 className="days-card__title">{props.day}</h3>

      <p className="days-card__temp">{`${props.tempMin}° / ${props.tempMax}°`}</p>

      <p className="days-card__text">{props.text}</p>
    </div>
  );
}
