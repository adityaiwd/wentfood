import React from "react";
import FoodCard from "./FoodCard";
import {
  Button,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
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
    color: "black",
    fontFamily: "Nexa",
    fontSize: 22.4,
    cursor: "pointer",
  },
  subtitle: {
    fontFamily: "Nexa",
    fontSize: 17.6,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    padding:"10px 20px",
    fontSize: 17,
    marginBottom:50,
    fontFamily: "Nexa",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
  },
  cards:{
    alignItems:"center",
    display: "flex",
    flexDirection:"column"
  }
}));

function Content() {
  const classes = useStyles();
  const cardCount = 20;
  const cards = [...Array(cardCount)];
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titles}>
          <Typography className={classes.title} variant="h6">
            Pesan langsung dari restoran di Jakarta
          </Typography>
          <Typography className={classes.subtitle}>
            Lihat-lihat makanan enak, pilih yang kamu suka, WentFood bakal antar
            ke kamu.
          </Typography>
        </div>
        <div  className={classes.cards} >
          <Grid container spacing={3} style={{ marginBottom: 50 }}>
            {cards.map((_, idx) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <FoodCard />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="inherit"
            className={classes.navButton}
          >
            Tampilin lebih banyak resto
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Content;
