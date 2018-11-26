import React, { Component } from 'react'
import { Link } from "react-router-dom"
import employees from "./employees.png"
import "./employees.css"


class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
        {
          this.props.employees.map(employee =>
            <div key={employee.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={employees} className="icon--employees" />
                  <p className="centerText">{employee.name}</p>
                  <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                  <a href="#" onClick={() => this.props.deleteEmployee(employee.id)} className="card-link">Delete</a>
                </h5>
              </div>
            </div>
          )}
      </section>
    )
  }
}

export default EmployeeList