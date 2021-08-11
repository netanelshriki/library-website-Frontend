import axios from "axios";
import { useEffect, useState } from "react";
import UserModel from "../../../UserModel/UserModel";
import {
  Button,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Layout.css";
import notify from "../../../Services/Notifilcation";
import { useHistory } from "react-router-dom";
import store from "../../Redux/Store";
import tokenAxios from "../../../Services/interceptor";

function Layout() {
  const [gets, setGet] = useState<UserModel[]>([]);
  const history = useHistory();



  useEffect(() => {
    if(!store.getState().authState.user){
      notify.error("please login");
      history.push("/login")
  }
    const axiosGet = async () => {
      const response = await tokenAxios.get<UserModel[]>(
        "http://localhost:8080/lib/employees"
      );
      setGet(response.data);
    };
    axiosGet();
  }, [gets]);


   function deletePost(id) {
     axios
       .delete<any>( "http://localhost:8080/lib/employees/"+id)
       .then(() => {
         notify.success("Employee deleted!");
    setGet([]);
       });
   };

   function updatePost(id) {
     console.log(id);
history.push("/editempl/"+id);
const result = 

    axios
      .put<any>( "http://localhost:8080/lib/employees/update",)
      .then(() => {
        notify.success("Employee deleted!");
   setGet([]);
      });
  };



  const res = gets.map((get) => {
    return (
      <TableBody>
        <TableRow>
          <TableCell >{get.id} </TableCell>
          <TableCell align="right">{get.name}</TableCell>
          <TableCell align="right">{get.email}</TableCell>
          <TableCell align="right">{get.password}</TableCell>
          <TableCell align="right">{get.clientType}</TableCell>
          <TableCell align="right">
            <Button>
              <CreateIcon onClick={() =>updatePost(get.id)}/>
            </Button>
            <Button >
              <DeleteIcon onClick={()=>deletePost(get.id)}/>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  });

  return (
    <div className="Layout">
    
      <Table className="Table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right"> Email&nbsp;</TableCell>
            <TableCell align="right">Password&nbsp;</TableCell>
            <TableCell align="right">ClientType&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>

        {gets && res}
      </Table>
    
    
    </div>
  );
}

export default Layout;
