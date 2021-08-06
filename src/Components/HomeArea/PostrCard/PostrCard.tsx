import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import "./PostrCard.css";

const useStyles = makeStyles((theme)=>({
    card: {
        display: "flex",
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
}
)); 

function PostrCard(): JSX.Element {

const classes = useStyles();

    return (
        <div className="PostrCard">
			<Grid item xs={12} md={6}>
                <CardActionArea component='a'>
                   <Card className={classes.card}>
                   <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
               aaaa
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
               bbbb
              </Typography>
              <Typography variant="subtitle1" paragraph>
               cccccc
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
    
                       </Card> 
                </CardActionArea>
            </Grid>
        </div>
    );
}

export default PostrCard;
