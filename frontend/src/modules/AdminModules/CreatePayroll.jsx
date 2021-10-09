import React, { Component } from "react";
import axios from "axios";
import "./AllPayrolls.css";

export default class CreatePayroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empno: "",
      name: "",
      position: "",
      bank: "",
      bank_branch: "",
      account_no: "",
      basic_salary: "",
      salary_date: "",
      last_paid: ""
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  /*
    handleInputFileChange = e => {
        var file = e.target.files[0];
        console.log(file);
    };
    */

  onSubmit = e => {
    e.preventDefault();

    const {
      empno,
      name,
      position,
      bank,
      bank_branch,
      account_no,
      basic_salary,
      salary_date,
      last_paid
    } = this.state;

    const data = {
      empno: empno,
      name: name,
      position: position,
      bank: bank,
      bank_branch: bank_branch,
      account_no: account_no,
      basic_salary: basic_salary,
      salary_date: salary_date,
      last_paid: last_paid
    };

    console.log(data);

    axios.post("http://localhost:5000/payroll/save", data).then(res => {
      if (res.data.success) {
        this.setState({
          empno: "",
          name: "",
          position: "",
          bank: "",
          bank_branch: "",
          account_no: "",
          basic_salary: "",
          salary_date: "",
          last_paid: ""
        });
      }
    });
    //alert("Save Details Successful!");
    //this.props.history.push("/admin");
  };

  render() {
    return (
      <div className="col-md-6 mt-4 mx-auto">
        <br />

        <h1>Payroll Management | Add Payroll Details</h1>
        <br />
        <br />

        <form
          className="need-validation2"
          noValidate
          style={{
            backgroundColor: "#F6F5F5",
            border: "5px solid eastern blue",
            padding: "30px",
            borderRadius: "15px"
          }}
        >
          <h2>Employee Details</h2>
          <hr></hr>

          <div className="form-group col-sm-4" style={{ marginBottom: "15px" }}>
            <label
              for="valid1"
              class="form-label"
              style={{ marginBottom: "5px" }}
            >
              Empoyee ID
            </label>
            <input
              type="number"
              id="valid1"
              className="form-control"
              placeholder="required**"
              name="empno"
              value={this.state.empno}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group " style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter full name(requied**)"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group col-sm-6" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Position</label>
            <select
              defaultValue={"DEFAULT"}
              className="form-select"
              onChange={this.handleInputChange}
              name="position"
              required
            >
              <option value="DEFAULT" disabled>
                Select employee's position
              </option>
              <option value="Manager">Manager</option>
              <option value="Senior">Senior Staff</option>
              <option value="Trainee">Trainee</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <br />

          <h2>Bank Details</h2>
          <hr></hr>

          <div class="d-flex justify-content-between">
            <div
              className="form-group col-md-6"
              style={{ marginBottom: "15px" }}
            >
              <label style={{ marginBottom: "5px" }}>Bank</label>
              <select
                defaultValue={"DEFAULT"}
                className="form-select"
                aria-label="Default select example"
                onChange={this.handleInputChange}
                name="bank"
                required
              >
                <option value="DEFAULT" disabled>
                  Select Bank Name
                </option>
                <option name="boc">Bank of Ceylon</option>
                <option name="commercial">Commercial Bank</option>
                <option name="dfcc">DFCC Bank PLC</option>
                <option name="hatton">Hatton National Bank</option>
                <option name="hdfc">HDFC Bank</option>
                <option name="nations">Nations Trust Bank</option>
                <option name="ndb">NDB Bank</option>
                <option name="panasia">PAN Asia Bank</option>
                <option name="peoples">Peoples Bank</option>
                <option name="sampath">Sampath Bank</option>
                <option name="seylan">Seylan Bank</option>
                <option name="union">Union Bank-Colombo</option>
              </select>
            </div>

            <div
              className="form-group col-md-5"
              style={{ marginBottom: "15px" }}
            >
              <label style={{ marginBottom: "5px" }}>Branch</label>
              <input
                type="text"
                className="form-control"
                name="bank_branch"
                placeholder=""
                value={this.state.bank_branch}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="form-group col-md-6" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Account No</label>
            <input
              type="text"
              className="form-control"
              name="account_no"
              placeholder="Type the correct account number"
              value={this.state.account_no}
              onChange={this.handleInputChange}
            />
          </div>
          <hr></hr>

          <div class="d-flex justify-content-around">
            <div
              className="form-group col-md-6"
              style={{ marginBottom: "15px" }}
            >
              <label style={{ marginBottom: "5px" }}>Basic Salary</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    Rs
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="basic_salary"
                  placeholder=""
                  value={this.state.basic_salary}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
              className="form-group col-md-5"
              style={{ marginBottom: "15px" }}
            >
              <label style={{ marginBottom: "5px" }}>Pay Date</label>
              <input
                type="date"
                className="form-control"
                name="salary_date"
                placeholder="Enter the pay day"
                value={this.state.salary_date}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group col-md-5" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Last Paid Month</label>
            <select
              defaultValue={"DEFAULT"}
              className="form-select"
              aria-label="Default select example"
              onChange={this.handleInputChange}
              name="last_paid"
            >
              <option value="DEFAULT" disabled>
                Select Month
              </option>
              <option name="jan">Jan</option>
              <option name="feb">Feb</option>
              <option name="mar">Mar</option>
              <option name="apr">Apr</option>
              <option name="may">May</option>
              <option name="jun">Jun</option>
              <option name="jul">Jul</option>
              <option name="aug">Aug</option>
              <option name="sep">Sep</option>
              <option name="oct">Oct</option>
              <option name="nov">Nov</option>
              <option name="dec">Dec</option>
            </select>
          </div>
          <br />

          <div class="d-flex justify-content-center">
            <button
              className="btn btn-info"
              type="submit"
              style={{ backgroundColor: "#1687A7" }}
              onClick={this.onSubmit}
            >
              &nbsp;&nbsp;Save&nbsp;&nbsp;
            </button>{" "}
            &nbsp;&nbsp;
            <button className="btn btn-danger" type="cancel">
              Cancel
            </button>
          </div>
          <div />
        </form>

        <br />
        <div class="back">
          <a href="/admin">
            <i class="fas fa-angle-double-left fa-3x">
              &nbsp;&nbsp;Back To Payrolls List
            </i>
          </a>
        </div>
        <br />
      </div>
    );
  }
}
