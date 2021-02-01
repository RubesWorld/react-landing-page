import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    maxHeight: 10000,
  },
  Title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white",
  },
  description: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "white",
  },
  Button: {
    marginTop: "25px",
    color: '#5AFF3D"',
    fontFamily: "Nunito",
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={place.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.Title}
            variant="h2"
            component="h2"
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {place.description}
          </Typography>
          <Button variant="contained" className={classes.Button}>
            Enter Site
          </Button>
        </CardContent>
      </Card>
    </Collapse>
  );
}
