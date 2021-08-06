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

function Layout() {
  const [gets, setGet] = useState<UserModel[]>([]);

  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get<UserModel[]>(
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


  const res = gets.map((get) => {
    return (
      <TableBody>
        <TableRow>
          <TableCell>{get.id} </TableCell>
          <TableCell align="right">{get.name}</TableCell>
          <TableCell align="right">{get.email}</TableCell>
          <TableCell align="right">{get.password}</TableCell>
          <TableCell align="right">{get.clientType}</TableCell>
          <TableCell align="right">
            <Button>
              <CreateIcon />
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
      {/* <TableContainer component={Paper}> */}
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
      {/* { // <Button color="secondary" onClick={deleteEmp}>{count}</Button> */}
    
    </div>
  );
}

export default Layout;
