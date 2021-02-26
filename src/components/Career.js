import React, { Component } from 'react';
import uniqid from 'uniqid';
import Jobs from './Jobs';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import '../styles/Career.css';

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
      displayForm: false
    };
  }

// Form input function

  inputHandler = (evt) => {
    const key = evt.target.dataset.key
    this.setState({
        [key]: evt.target.value
    })
  }

  submitHandler = (event) => {
      event.preventDefault();
      this.setState({
        jobs: [...this.state.jobs, {role: this.state.role, company: this.state.company, 
        dateFrom: this.state.dateFrom, 
        dateTo: this.state.dateTo, 
        duties: this.state.duties, id: uniqid()}],
        role: '',
        company: '',
        dateFrom: "",
        dateTo: "",
        duties: '',
      })
  }

  displayFormHandler = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  // Form editing functions

  editJobs = (evt) => {
   const jobs = Object.assign([],this.state.jobs)
   const key = evt.target.dataset.key
   jobs.map((job) => {
     if(evt.target.id === job.id){
       job[key] = evt.target.value
     }
   })
   this.setState({
     jobs: jobs
   })
  }

  deleteJobs = (evt) => {
    const jobs = Object.assign([], this.state.jobs);
    this.setState({
      jobs: jobs.filter(job => evt.target.id !== job.id)
    });
  }

  render() {

    if(this.state.displayForm){
      return (
        <div className="work-experience">
          <h2>Work Experience</h2>
          < AiOutlineCloseCircle onClick={this.displayFormHandler} className="icon"/>
          <form onSubmit={this.submitHandler}>
            <label htmlFor="role">Role: </label>
            <input required type="text" data-key="role" value={this.state.role} onChange={this.inputHandler} name="role" id="role" />
            <label htmlFor="company">Company: </label>
            <input required type="tel" data-key="company" value={this.state.company} onChange={this.inputHandler} name="Company" id="company" />
            <br/>
            <label htmlFor="dateFrom">Dates worked: </label>
            <input required type="date" data-key="dateFrom" value={this.state.dateFrom} onChange={this.inputHandler} name="datefrom" />
            <label htmlFor="dateTo">  to  </label>
            <input required data-key="dateTo" value={this.state.dateTo} onChange={this.inputHandler} type="date" />
            <br/>
            <textarea required name="" data-key="duties" value={this.state.duties} onChange={this.inputHandler} rows="5" placeholder="Enter details of role..." />
            <button className="career-button" type="submit" onSubmit={this.submitHandler}>Add Work Experience</button>
          </form>
         {this.state.jobs.map((job) => <Jobs role={job.role} company={job.company} id={job.id} dateFrom={job.dateFrom}
         dateTo={job.dateTo} duties={job.duties} key={job.id} editJobs={this.editJobs} deleteJobs={this.deleteJobs} />)}
         <hr/>
        </div>
      );
    } else if(!this.state.displayForm){
      return (
        <div className="work-experience">
          <h2>Work Experience</h2>
          {this.state.jobs.map((job) => <Jobs role={job.role} company={job.company} id={job.id} dateFrom={job.dateFrom}
         dateTo={job.dateTo} duties={job.duties} key={job.id} editJobs={this.editJobs} deleteJobs={this.deleteJobs} />)}
          <AiOutlinePlusCircle className="icon" onClick={this.displayFormHandler}/>
          <hr/>
        </div>
      )
    }
    
  }
}

export default Career;
