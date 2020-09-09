import React, { useState } from "react";
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
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';

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
    flexGrow: 1,
    color:"black",
    fontFamily:"Nexa",
    fontSize: 30,
    cursor:"pointer"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    marginLeft: 20,
    fontFamily:"Nexa",
    textTransform: "none",
    backgroundColor:"#29A34E"
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:"white",paddingTop: 5,paddingBottom: 5}}>
          <Container maxWidth="lg">
            <Toolbar>
            <Typography className={classes.title} variant="h6">
            <FastfoodRoundedIcon fontSize="large" style={{marginRight:10}}/>
              wentfood
            </Typography>
            <Typography className={classes.sectionDesktop}  style={{color:"black",fontFamily:"Nexa"}} variant="h6">
              Dapetin app wentjek
            </Typography>
            <Button color="inherit" className={classes.navButton}>Download</Button>
        </Toolbar>
          </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
