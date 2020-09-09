import React from "react";
import Background from "../assets/jumbotronbg2.jpg";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Container,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  title: {
    color: "white",
    fontFamily: "Nexa",
    fontSize: 35,
    fontWeight: 500,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 20,
    marginTop: 10,
    color: "white",
    fontFamily: "Nexa",
    fontSize: 25,
    textAlign: "center",
  },
  jumboBg: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "275px",
    padding: "80px 0px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  navButton: {
    width: "200px",
    fontFamily: "Nexa",
    textTransform: "none",
    backgroundColor: "#00A7E1",
    color: "white",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
  },
}));
function Jumbotron() {
  const classes = useStyles();
  return (
    <div className={classes.jumboBg}>
      <Typography className={classes.title}>
        Cicipin macam-macam resto paling top
      </Typography>
      <Typography className={classes.subtitle}>
        Dari kaki lima, yang viral, sampe kuliner legendaris, makanan enak kami
        antar ke kamu.
      </Typography>
      <Button variant="contained" color="inherit" className={classes.navButton}>
        Download Wentjek
      </Button>
    </div>
  );
}

export default Jumbotron;
