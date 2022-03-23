import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import accuWeatherApi from "../../utils/accuweatherApi";
import { useDispatch } from "react-redux";
import { changeFavoriteCards } from "../../features/favoriteCards";
import Button from "@mui/material/Button";

function CardFavorite(props) {
  const [cardInfo, setCardInfo] = useState(false);

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(
      changeFavoriteCards({
        name: props.name,
        key: props.id,
      })
    );
  };

  useEffect(() => {
    accuWeatherApi.getCurrentWeather(props.id).then((res) => {
      setCardInfo(res);
    });
  }, []);

  return (
    <div>
      <Paper elevation={3}>
        <Button onClick={onSave} variant="outlined">
          Save
        </Button>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardInfo ? cardInfo[0].Temperature.Metric.Value : null}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardInfo ? cardInfo[0].WeatherText : null}
        </Typography>
      </Paper>
    </div>
  );
}

export default CardFavorite;
