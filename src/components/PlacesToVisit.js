import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//import Modules
import places from "../static/places";
import ImageCard from "./ImageCard";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const PlacesToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="places-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
};

export default PlacesToVisit;
