import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <AppBar
      className="navbar"
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Get The Weather
        </Typography>
        <Link className="navbar__link" to={props.link}>
          {props.linkName}
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
