import {
  Badge,
  Button,
  createMuiTheme,
  CssBaseline,
  Divider,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSpring, animated, config } from 'react-spring'
import SideBar from "../SideBar/SideBar";
import { NavLink, useHistory } from "react-router-dom";
import store from "../../Redux/Store";
import { useEffect, useState } from "react";
import { Switch } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    title:{
        flexGrow: 1,

    },
    tagline:{
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: "Montserrat"
    }
}));

function Header(): JSX.Element {


const classes = useStyles();
const history = useHistory();
const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: config.gentle,
  });

  const [client,setClient] = useState(store.getState().authState.user);
 
useEffect(()=> {
    console.log(client);
        const unsubscribe = store.subscribe(() => {
        setClient(store.getState().authState.user)
      return unsubscribe;
     })
  });


  return (
    
    <>
      <Toolbar>
       
        <IconButton color="inherit">
        <SideBar>
          <MenuIcon />
          </SideBar> 

        </IconButton>

        <Typography variant="h5" className={classes.title} >
       
        <animated.h5 style={props}>
     <Button onClick={()=>history.push("/home")}>
          Library
                     
            </Button>

            </animated.h5>
            </Typography>
          

             <span>{client ===null ? <span>hello guest</span> :  <span>hello {client?.name}</span> } &nbsp;&nbsp;&nbsp;&nbsp;</span> 
{client===null ? <span><Button onClick={()=>history.push("/register")}>register</Button>&nbsp;&nbsp;
<Button onClick={()=>history.push("/login")}>login</Button></span> 

: <Button onClick={()=>history.push("/logout")}>logout</Button>}

     
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
      
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <Toolbar className={classes.tagline}>welcome to the library</Toolbar>
      </>
   
  );
}

export default Header;