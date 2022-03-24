import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { changeFavoriteCards } from "../../features/favoriteCards";
import { useSelector } from "react-redux";
import "./DaysCard.css";
import { styled } from "@mui/system";

export default function DaysCard(props) {
  const styledPaper = styled(
    Paper,
    {}
  )({
    borderradius: "15px",
  });
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
