import {
  Button,
  Card,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import notify from "../../../Services/Notifilcation";
import UserModel from "../../../UserModel/UserModel";
import { EmployeesAddedAction } from "../../Redux/EmployeesSatate";
import Library from "../../Redux/Library";
import "./AddEmployee.css";
import { Alert } from '@material-ui/lab';

function AddEmployee(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModel>();

  async function send(user: UserModel) {
    try {
      // const formData =new FormData();
      //  formData.append("Name", 'user.name');
      //  formData.append("Email", 'user.email');
      //  formData.append("Password", 'user.password');
      //  formData.append("ClientType","EMPLOYEE");
      const employeesend = {
        name: user.name,
        email: user.email,
        password: user.password,
        clientType: "EMPLOYEE",
      };

      const post = await axios.post<UserModel>(
        "http://localhost:8080/lib/register",
        employeesend
      );

      const added = post.data;
      Library.dispatch(EmployeesAddedAction(added));
      // store.dispatch(catsAddedAction(added)); //With Redux
      notify.success("Employee " + user.name + " created!");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="AddEmployee">
      <Card>
        <h1>Add new Employee</h1>
        <form onSubmit={handleSubmit(send)}>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            type="text"
            {...register("name", {
              required: {
                  value: true,
                  message: "your name is required"},
              maxLength: {
                  value: 30,
                  message: "your name can not be greater than 30"},
              minLength: {
                  value: 3,
                  message: "your name can not be less than 3 characters"}
            })}
          />

          <br />
        
          <span className="alert">{errors.name?.message}</span>
          <br />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            {...register("email")}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            {...register("password")}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddEmployee;
