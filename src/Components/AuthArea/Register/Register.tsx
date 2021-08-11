import "./Register.css";
import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    MenuItem,
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
    import { Alert } from "@material-ui/lab";
  import Papering from "../../HomeArea/Papering/Papering";
import { useState } from "react";
import UserAuthModel from "../../../UserModel/UserAuthModel";
import store from "../../Redux/Store";
import { registerAction } from "../../Redux/AuthState";
  
  const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
  },
  
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  
  }));


function Register(): JSX.Element {
  
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<UserModel>();
        const history = useHistory();
        const classes = useStyles();
        const [age, setAge] = useState<string | number>('');
        const [open, setOpen] = useState(false);
      
        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            setAge(event.target.value as number);
          };
        
          const handleClose = () => {
            setOpen(false);
          };
        
          const handleOpen = () => {
            setOpen(true);
          };

          async function send(user: UserAuthModel){
try {
    const response = await axios.post<UserAuthModel>("http://localhost:8080/lib/register", user);
   
    store.dispatch(registerAction(response.data));

    notify.success("register successfully!");
     history.push("/home");
} catch (err) {
    notify.error("something went wrong!");
}
          };

        return (
        
      
         
          <div>
            <Card  className={classes.root}  elevation={125}>
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
                  <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Client Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          {...register("clientType", { required: {value:true,message:'Missing User Type'} })}
        >
          <MenuItem value="">
            <em>Type:</em>
          </MenuItem>
          <MenuItem value="EMPLOYEE">Employee</MenuItem>
          <MenuItem value='BORROWER'>Borrowe</MenuItem>
        
        </Select>
      </FormControl>
                  <br/>
                  <br/>
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </form>
              </CardContent>

              <br/>
              
                      <Button onClick={()=>history.goBack()}variant="contained" color="secondary">back</Button>
            </Card>
          </div>
       
        );
      }
      

export default Register;
