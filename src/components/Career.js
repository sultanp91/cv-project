import React, { Component } from 'react';
import uniqid from 'uniqid';

class Career extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      role: '',
      company: '',
      dateFrom: "",
      dateTo: "",
      duties: '',
    };
  }

  roleHandler = (evt) => {
    this.setState({
        role: evt.target.value
    })
  }

  companyHandler = (evt) => {
      this.setState({
        company: evt.target.value
      })
  }

  dateFromHandler = (evt) => {
      this.setState({
          dateFrom: evt.target.value
      })
  }

  dateToHandler = (evt) => {
      this.setState({
          dateTo: evt.target.value
      })
  } 

  dutiesHandler = (evt) => {
      this.setState({
          duties: evt.target.value
      })
  }

  submitHandler = (evt) => {
      evt.preventDefault();
      this.setState({
        jobs: [...this.state.jobs, {role: this.state.role, company: this.state.company, dateFrom: this.state.dateFrom, 
        dateTo: this.state.dateTo, duties: this.state.duties, key: uniqid()}],
        role: '',
        company: '',
        dateFrom: "",
        dateTo: "",
        duties: '',
      })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.role} onChange={this.roleHandler} name="role" id="role" />
          <input type="tel" value={this.state.company} onChange={this.companyHandler} name="Company" id="company" />
          <input type="date" value={this.state.dateFrom} onChange={this.dateFromHandler} name="datefrom" />
          -
          <input value={this.state.dateTo} onChange={this.dateToHandler} type="date" />
          <textarea name="" value={this.state.duties} onChange={this.dutiesHandler} cols="40" rows="5" placeholder="Enter details of role..." />
          <button onClick={this.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Career;
