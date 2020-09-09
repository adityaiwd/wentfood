import React from 'react';
import Background from '../assets/jumbotronbg2.jpg';
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
      color:"white",
      fontFamily:"Nexa",
      fontSize: 40,
      fontWeight: 500,
      textAlign:"center",
    },
    subtitle: {
        marginBottom:20,
        marginTop:20,
        color:"white",
        fontFamily:"Nexa",
        fontSize:25,
        textAlign:"center"
      },
    jumboBg: {
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        height:"300px",
        padding:"80px 0px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        left:0,
        width:"100%"
    },
    navButton: {
        width:"200px",
      fontFamily:"Nexa",
      textTransform: "none",
      backgroundColor:"#29A34E",
      color:"white"
    },
  }));
function Jumbotron() {
  const classes = useStyles();
    return(
        <div className={classes.jumboBg} >
           <Typography className={classes.title}>Cicipin macam-macam resto paling top</Typography>
           <Typography className={classes.subtitle}>Dari kaki lima, yang viral, sampe kuliner legendaris, makanan enak kami antar ke kamu.</Typography>
           <Button variant="contained" color="inherit" className={classes.navButton}>Download Wentjek</Button>
        </div>
    );
}

export default Jumbotron;