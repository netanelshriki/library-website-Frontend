import { Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import UserModel from "../../../UserModel/UserModel";
import { EmployeesActionType, EmployeesAddedAction } from "../../Redux/EmployeesSatate";
import Library from "../../Redux/Store";

function AddEmployeeRedux(): JSX.Element {
  // const obj = useForm<CatModel>();
  // const register = obj.register;
  // const handleSubmit = obj.handleSubmit

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModel>();

  async function send(employee: UserModel) {
  
    try {
      const formData = new FormData();
      const employeesend = {
        "name": employee.name,
        "email": employee.email,
        "password": employee.password,
        "clientType": 'EMPLOYEE'
      }
    //   formData.append("name", employee.name);
    //   formData.append("email", employee.email);
    //   formData.append("password", employee.password);
    //   formData.append("clientType", employee.clientType);

      const response = await axios.post<UserModel>(
        "http://localhost:8080/lib/register",
        employeesend
      );
      const added = response.data;
      Library.dispatch(EmployeesAddedAction(added));
      // store.dispatch(catsAddedAction(added)); //With Redux
      alert("cat has been added");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="AddKitten ">
      <h2>Add Employee</h2>
    
      <form onSubmit={handleSubmit(send)}>
        <label>Name</label> <br />
        <input
          type="text"
         
          {...register("name", {
            required: true,
            minLength: 2,
          })}
        />
        {/* pattern: /^[A-Z].*$/ */}
        <br />
        {/* {errors.name && errors.name.type==='required' && <span>missing name</span>}
                {errors.name && errors.name.type==='minLength' && <span>name is too short</span>} */}
        {errors.name?.type === "required" && <span>missing name</span>}
        {errors.name?.type === "minLength" && <span>name is too short</span>}
        <br /> <br />
        <label>Email</label> <br />
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Missing Weight",
            },
            min: {
              value: 0,
              message: "Weight must be greater than zero",
            },
          })}
        />
        <br />
        <span>{errors.email?.message}</span>
        <br /> <br />
        <label>Password</label> <br />
        <input type="text" {...register("password", { required: true })} />
        <br />
        {errors.password && <span>missing password</span>}
        <br /> <br />
        <Button type="submit" color="secondary">Add</Button>
      </form>
    </div>
  );
}

export default AddEmployeeRedux;
