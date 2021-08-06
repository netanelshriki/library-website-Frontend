import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./Components/LayoutArea/AddEmployee/AddEmployee";
import Layout from "./Components/LayoutArea/Layout/Layout";
import Employees from "./Components/LayoutArea/Employees/Employees";
import AddEmployeeRedux from "./Components/LayoutArea/AddEmployeeRedux/AddEmployeeRedux";
import ShowEmplHooks from "./Components/LayoutArea/ShowEmplHooks/ShowEmplHooks";
import { Container, createTheme, ThemeProvider } from "@material-ui/core";
import Header from "./Components/HomeArea/Header/Header";
import Main from "./Components/HomeArea/Main/Main";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="App" >
        <Header />
        <Main/>
      </Container>
    </ThemeProvider>
  );
  {
    /* <header className="header">
     {/* <Header /> */
  }
  {
    /* <Layout/> */
  }
  {
    /* <DeleteEmployees/> */
  }
  {
    /* <ShowEmplHooks/> */
  }
  {
    /* <AddEmployee/> */
  }
  {
    /* <Employees/> */
  }
  {
    /* <AddEmployeeRedux/> */
  }
}

export default App;
