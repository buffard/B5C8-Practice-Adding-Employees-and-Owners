import React, { Component } from "react"
import "./employees.css"
import dog from "./employees.png"


export default class EmployeeDetail extends Component {
  render() {
    /*
        Using the route parameter, find the animal that the
        user clicked on by looking at the `this.props.animals`
        collection that was passed down from ApplicationViews
    */
    const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

    return (
      <section className="employees list">
        <div key={employee.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" />
              {employee.name}
            </h4>
            <h6 className="card-title">{employee.name}</h6>
            <a href="#"
              onClick={() => this.props.deleteEmployee(employee.id)
                .then(() => this.props.history.push("/employees"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>
    )
  }
}