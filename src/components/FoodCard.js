import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import foodImage from "../assets/foodcard.jpg";
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    cursor:"pointer"
  },
  header:{
    fontFamily:"Nexa",
    textTransform: "none"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  }
}));

function FoodCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={foodImage}
          title="Paella dish"
        />
        <CardHeader
            
          title= {
           <Typography className={classes.header} style={{fontWeight:"bold",fontSize:17, marginBottom:10}}>
            Donat Bambang, Sudirman
           </Typography>   
          }
          subheader={
           <Typography className={classes.header} style={{fontSize:13,marginBottom:-15}}>
            Aneka Donat
           </Typography>   
          }
        />
        <CardActions>
            <StarRoundedIcon style={{color:"#ECD907"}}/>
          <Typography>
              4.3
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default FoodCard;
