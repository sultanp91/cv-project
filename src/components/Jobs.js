import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { IoTrashOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosSave } from "react-icons/io";
import '../styles/Jobs.css';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editMode: false
    };
  }

  editMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

static propTypes = {
    role: PropTypes.string,
    company: PropTypes.string,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
    duties: PropTypes.string,
    id: PropTypes.string,
    editJobs: PropTypes.func,
    deleteJobs: PropTypes.func,
  }
  render() {

     if(!this.state.editMode){
      return (
        <div className="jobs-content">
         <p><b>{this.props.role}</b></p>
         <p>{this.props.company}</p>
         <p><em>{format(new Date(this.props.dateFrom), "do MMMM yy")} to 
         {format(new Date(this.props.dateTo), "do MMMM yy")}</em></p>
         <p>{this.props.duties}</p>
         <FaRegEdit class="edit-icon" onClick={this.editMode} id={this.props.id}/>
         <IoTrashOutline class="icon" id={this.props.id} onClick={this.props.deleteJobs}/>
        </div>
      )
     }  else if(this.state.editMode){
       return (
         <div className="jobs-form">
           <label>Role: </label>
           <input type="text" id={this.props.id} placeholder="Role" data-key="role" onChange={this.props.editJobs} value={this.props.role}/>
           <label>Company</label>
           <input type="text" id={this.props.id} placeholder="Company/Organisation"  data-key="company" onChange={this.props.editJobs} value={this.props.company}/>
           <br/>
           <label>Start Date:</label>
           <input type="date" id={this.props.id} data-key="dateFrom" onChange={this.props.editJobs} value={this.props.dateFrom} />
           <label>End Date:</label> <br/>
           <label>Details: </label>
           <input type="date" id={this.props.id} data-key="dateTo" onChange={this.props.editJobs} value={this.props.dateTo} />
           <textarea rows="5" id={this.props.id} placeholder="Job details" data-key="duties" onChange={this.props.editJobs} value={this.props.duties}/>
           <IoIosSave class="edit-icon" onClick={this.editMode} id={this.props.id}/>
           <IoTrashOutline class="icon" id={this.props.id} onClick={this.props.deleteJobs}/>
         </div>
       )
     }
    }
  
}



export default Jobs;