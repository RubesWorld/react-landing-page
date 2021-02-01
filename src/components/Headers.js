import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
    color: "black",
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  container: {
    textAlign: "center",
  },
  appBarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  title: {
    fontSize: "5.5rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "3.5em",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appBarTitle}>
            Rubes <span className={classes.colorText}>World</span>.
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            {" "}
            Welcome to my
            <br /> <span className={classes.colorText}>website</span>
          </h1>
          <Scroll to="places-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
