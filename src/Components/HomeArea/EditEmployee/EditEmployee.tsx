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
  import Library from "../../Redux/Library";
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
                {...register("name" )}
              />
  
              <br />
              <FormHelperText error={true}>{errors.name?.message}</FormHelperText>
              <br />
  
              <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                type="email"
                {...register("email")}
              />
              <br />
              <FormHelperText error={true}>{errors.email?.message}</FormHelperText>
              <br />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                type="password"
                {...register("password")}
              />
              <br />
              <FormHelperText error={true}>{errors.password?.message}</FormHelperText>
            
              <br />
              <Button type="submit" >
                Edit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default EditEmployee;
  