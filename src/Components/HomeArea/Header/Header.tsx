import {
  Badge,
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

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" className={classes.title}>Library</Typography>
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
