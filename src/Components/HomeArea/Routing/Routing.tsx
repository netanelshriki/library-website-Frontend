import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import AddEmployee from "../../LayoutArea/AddEmployee/AddEmployee";
import Layout from "../../LayoutArea/Layout/Layout";
import Cards from "../Cards/Cards";
import EditEmployee from "../EditEmployee/EditEmployee";
import Papering from "../Papering/Papering";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Switch>
            <Route path="/home" component={Cards} exact/>
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/logout" component={Logout} exact />
            <Route path="/employee" component={Papering} exact/>
            <Route path="/editempl/:id" component={EditEmployee} exact/>
            <Route path="/employees" component={Layout} exact/>
            <Redirect from="/" to="/home" exact/>
            </Switch>
			
        </div>
    );
}

export default Routing;
