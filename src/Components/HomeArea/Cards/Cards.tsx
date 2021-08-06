import { Button, CardActions, CardContent, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import "./Cards.css";

const useStyles = makeStyles((theme)=>({
    title:{
        fontSize: 40,
        fontFamily: "Montserrat",
        color: "black"
    },
    cover:{
        backgroundImage: "url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg)",
    backgroundPosition: "center",
    padding: "35px 25px",
    //width: '38rem'  
    marginLeft: '80px',
    marginRight: '80px'
    },
    info:{
        color: "black"
    },
        btn:{
'&:hover':{
backgroundColor: "#2196f3",
opacity: '1.7',
color: 'white'
}
}
}));

function Cards(): JSX.Element {

   
        const classes = useStyles();
    

    return (
        <div>
			<Card  className={classes.cover}>
                <CardContent >
                    <Typography className={classes.title} gutterBottom>our new books</Typography>
                    <Typography variant="h5" className={classes.info}>a lot a lot of not important things about our new books</Typography>
                </CardContent>
                <CardActions>
<Button color="primary" size='large' className={classes.btn}>
    Read more
</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Cards;
