import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import UserModel from "../../../UserModel/UserModel";
import "./ShowEmplHooks.css";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
  });
  

function ShowEmplHooks(): JSX.Element {
    const [gets, setGet] = useState<UserModel[]>([]);

 
    useEffect(() => {
        client.get("/1").then((response) => {
          setGet(response.data);
        });
      }, []);
    
  
  
    // function deletePost() {
    //     axios
    //       .delete("/1")
    //       .then(() => {
    //         alert("Post deleted!");
           
    //       setGet();
    //       });
    //   }
  
  
    // const res = gets.map((get) => {
    //   return (
    //     <TableBody>
    //       <TableRow>
    //         <TableCell>{get.id} </TableCell>
    //         <TableCell align="right">{get.name}</TableCell>
    //         <TableCell align="right">{get.email}</TableCell>
    //         <TableCell align="right">{get.password}</TableCell>
    //         <TableCell align="right">{get.clientType}</TableCell>
    //         <TableCell align="right">
    //           <Button>
    //             edit
    //           </Button>
    //           <Button >
    //           Delete
             
    //          </Button>
    //         </TableCell>
    //       </TableRow>
    //     </TableBody>
        
    //   );
    // });
  
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
  
       
        </Table>
        
      
    </div>
  );
}

export default ShowEmplHooks;
