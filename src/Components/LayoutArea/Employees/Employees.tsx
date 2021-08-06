import axios from "axios";
import { Component } from "react";
import UserModel from "../../../UserModel/UserModel";
import Library from "../../Redux/Library";
import store from "../../Redux/Library";
import "./Employees.css";

// interface EmployeesProps {

// }

interface EmployeesState {
  employees: UserModel[];
}

class EmployeesList extends Component<{}, EmployeesState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      employees: Library.getState().EmployeeState.employees,
    };
  }

  public async componentDidMount() {
    try {
      const response = await axios.get<UserModel[]>(
        "http://localhost:8080/lib/employees"
      );
Library.getState().EmployeeState.employees = response.data;

      this.setState({ employees: response.data });
    } catch (e) {
      console.log(e.message);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="Employees">
        {this.state.employees.map((emp) => (
          <span>{emp.name}</span>
        ))}
      </div>
    );
  }
}

export default EmployeesList;
