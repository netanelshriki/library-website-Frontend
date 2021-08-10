import {
  Badge,
  Button,
  Divider,
  IconButton,
  makeStyles,
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
