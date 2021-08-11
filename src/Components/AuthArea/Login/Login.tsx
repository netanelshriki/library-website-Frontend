import "./Login.css";
import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    Select,
    TextField,
    Typography,
  } from "@material-ui/core";
  import axios from "axios";
  import { useForm } from "react-hook-form";
  import { useHistory } from "react-router-dom";
  import notify from "../../../Services/Notifilcation";
  import UserModel from "../../../UserModel/UserModel";
  import { EmployeesAddedAction } from "../../Redux/EmployeesSatate";
  import Library from "../../Redux/Store";
  import { Alert } from "@material-ui/lab";
  import Papering from "../../HomeArea/Papering/Papering";
import UserLoginModel from "../../../UserModel/UserLoginModel";
import { loginAction } from "../../Redux/AuthState";
import store from "../../Redux/Store";
import tokenAxios from "../../../Services/interceptor";

  const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
    },
    
    pos: {
      marginBottom: 12,
    },
    
}));

function Login(): JSX.Element {
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserModel>();
      const history = useHistory();
      const classes = useStyles();

async function send(userLogin: UserLoginModel){
    try{
const response = await tokenAxios.post<UserLoginModel>("http://localhost:8080/lib/login",userLogin);
store.dispatch(loginAction(response.data));
notify.success("login successful!");
history.push("/home");
    } catch (err){
        notify.error("something went wrong");
    }
}

   
    return (
        <div className="Login">
		
      <Card  className={classes.root} square  elevation={125}>
        <CardContent>
          <Typography className={classes.pos}>Login</Typography>
          <br />
          <form onSubmit={handleSubmit(send)}>

            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "your email is required",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "your email required",
                },
              })}
            />
            <br />
            <FormHelperText error={true}>{errors.email?.message}</FormHelperText>
            <br />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              {...register("password", {
                minLength: {
                  value: 5,
                  message: "your password can not be less than 5 chars",
                },
              })}
            />
            <br />
            <FormHelperText error={true}>{errors.password?.message}</FormHelperText>

            <br />
            <Button type="submit" variant="contained" color="primary" value="Login">
            Login
            </Button>
          </form>
        </CardContent>
        
                <Button onClick={()=>history.push("/home")}variant="contained" color="secondary">back</Button>
      </Card>
    </div>
 
    );
}

export default Login;