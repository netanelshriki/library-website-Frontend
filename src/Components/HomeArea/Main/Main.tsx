import { Grid } from "@material-ui/core";
import Cards from "../Cards/Cards";
import PostrCard from "../PostrCard/PostrCard";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Cards/>
            <br/>
            <Grid>
                <PostrCard/>
            </Grid>
        </div>
    );
}

export default Main;
