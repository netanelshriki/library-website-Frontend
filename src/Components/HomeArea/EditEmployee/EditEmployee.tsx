import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
    TextField,
    Typography,
  } from "@material-ui/core";
  import axios from "axios";
  import { useForm } from "react-hook-form";
  import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
  import notify from "../../../Services/Notifilcation";
  import { EmployeesAddedAction } from "../../Redux/EmployeesSatate";
  import Library from "../../Redux/Store";
  import "./EditEmployee.css";
  import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import UserModel from "../../../UserModel/UserModel";
  
interface RouteParam {
  id: string;
}

interface EditDetailsProps extends RouteComponentProps<RouteParam> { }

  function EditEmployee(props:EditDetailsProps): JSX.Element {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<UserModel>();
    const history = useHistory();
    const [gets, setGet] = useState<UserModel>();


async function send(user:UserModel) {

  const employeesend = {
    id: +props.match.params?.id ,
    name: user?.name ,
    email: user?.email ,
    password: user?.password ,
    clientType: "EMPLOYEE"
  };
    
const response = await axios.put<UserModel>( "http://localhost:8080/lib/employees/update",employeesend );
const updated = response.data;
console.log(updated);
//alert('cat has been updated');
history.push('/employees')

};


  
    return (
      <div className="EditEmployee">
        <Card>
          <CardContent>
            <Typography>Edit Employee</Typography>
            <br />
            <form onSubmit={handleSubmit(send)}>

              <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                type="text"
                {...register("name" , {
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
                Edit
              </Button>
              <br/>
              <br/>
            
            </form>
            
          </CardContent>
          <Button onClick={()=>history.push("/employees")}variant="contained" color="secondary">back</Button>
        </Card>
     
      </div> 
    );
  }
  
  export default EditEmployee;
  