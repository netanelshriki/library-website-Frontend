import { Redirect, Route, Switch } from "react-router-dom";
import AddEmployee from "../../LayoutArea/AddEmployee/AddEmployee";
import Layout from "../../LayoutArea/Layout/Layout";
import Cards from "../Cards/Cards";
import EditEmployee from "../EditEmployee/EditEmployee";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Switch>
            <Route path="/home" component={Cards} exact/>
            <Route path="/employee" component={AddEmployee} exact/>
            <Route path="/editempl/:id" component={EditEmployee} exact/>
            <Route path="/employees" component={Layout} exact/>
            <Redirect from="/" to="/home" exact/>
            </Switch>
			
        </div>
    );
}

export default Routing;
