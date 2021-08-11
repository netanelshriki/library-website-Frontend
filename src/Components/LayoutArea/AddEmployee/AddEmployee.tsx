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
import "./AddEmployee.css";
import { Alert } from "@material-ui/lab";
import Papering from "../../HomeArea/Papering/Papering";
import store from "../../Redux/Store";
import { useEffect } from "react";
import tokenAxios from "../../../Services/interceptor";

const useStyles = makeStyles((theme)=>({
root: {
  minWidth: 275,
},

pos: {
  marginBottom: 12,
},


}));

function AddEmployee(): JSX.Element {

  useEffect(()=>{
    if(!store.getState().authState.user){
        notify.error("please login");
        history.push("/login")
    }
})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModel>();
  const history = useHistory();
  const classes = useStyles();

  async function send(user: UserModel) {
    try {
      const employeesend = {
        name: user.name,
        email: user.email,
        password: user.password,
        clientType: "EMPLOYEE",
      };

      const post = await tokenAxios.post<UserModel>(
        "http://localhost:8080/lib/register",
        employeesend
      );

      const added = post.data;
      Library.dispatch(EmployeesAddedAction(added));
      // store.dispatch(catsAddedAction(added)); //With Redux

      notify.success("Employee " + user.name + " created!");
      history.push("/employees");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
  

   
    <div>
      <Card  className={classes.root} square  elevation={125}>
        <CardContent>
          <Typography className={classes.pos}>Add new Employee</Typography>
          <br />
          <form onSubmit={handleSubmit(send)}>
            <TextField
              id="outlined-basic"
              label="name"
              variant="outlined"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "your name is required",
                },
                maxLength: {
                  value: 30,
                  message: "your name can not be greater than 30",
                },
                minLength: {
                  value: 2,
                  message: "your name can not be less than 2 chars",
                },
              })}
            />

            <br />
            <FormHelperText error={true}>{errors.name?.message}</FormHelperText>
            <br />

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
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </form>
        </CardContent>
        
                <Button onClick={()=>history.goBack()}variant="contained" color="secondary">back</Button>
      </Card>
    </div>
 
  );
}

export default AddEmployee;
