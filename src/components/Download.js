import React from "react";
import {
  Button,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AppleIcon from '@material-ui/icons/Apple';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
    padding: "80px 0",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  titles: {
    marginBottom: 50,
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Nexa",
    fontSize: 25,
    cursor: "pointer",
  },
  subtitle: {
    marginTop: 75,
    fontFamily: "Nexa",
    fontSize: 30,
    fontWeight: "bold",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  download: {
    marginTop: 20,
    padding: "10px 20px",
    fontFamily: "Nexa",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00171F",
    "&:hover": {
      backgroundColor: "#00171F",
      color: "#FFF",
    },
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginTop: 20,
    fontFamily: "Nexa",
    fontSize: 16,
  },
}));
function Download() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={5}>
            <Typography className={classes.title} variant="h6">
              <FastfoodRoundedIcon
                fontSize="large"
                style={{ marginRight: 10 }}
              />
              wentfood
            </Typography>
            <Typography paragraph className={classes.subtitle}>
              Makanan favorit dan hasil kulineran baru kamu cus langsung dianter
            </Typography>
            <Typography paragraph className={classes.text}>
              Download Wentjek dan buka WentFood buat nikmatin layanannya.
            </Typography>
            <div>
              <Button variant="contained" className={classes.download} style={{marginRight:20}}>
                <PlayArrowRoundedIcon style={{marginRight:20}} fontSize="large"/>
                <div style={{flexDirection:"column",alignItems:"left",fontFamily:"Nexa"}}>
                <Typography style={{textAlign:"left",fontFamily:"Nexa"}}>Temukan di</Typography>
                <Typography style={{alignItems:"left",fontFamily:"Nexa",fontWeight:"bold",fontSize:20}}>Google Play</Typography>
                    
                </div>
              </Button>
              <Button variant="contained" className={classes.download}>
                <AppleIcon style={{marginRight:20}} fontSize="large"/>
                <div style={{flexDirection:"column",alignItems:"left",fontFamily:"Nexa"}}>
                <Typography style={{textAlign:"left",fontFamily:"Nexa"}}>Download di</Typography>
                <Typography style={{alignItems:"left",fontFamily:"Nexa",fontWeight:"bold",fontSize:20}}>App Store</Typography>
                    
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item lg={7}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Download;
