import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

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
  }
  render() {

     if(!this.state.editMode){
      return (
        <div>
         <h1>{this.props.role}</h1>
         <h2>{this.props.company}</h2>
         <p> {format(new Date(this.props.dateFrom), "do MMMM yy")} to 
         {format(new Date(this.props.dateTo), "do MMMM yy")}</p>
         <p>{this.props.duties}</p>
         <button onClick={this.editMode}>Change</button>
        </div>
      )
     }  else if(this.state.editMode){
       return (
         <div>
           <input type="text" id={this.props.id} data-key="role" onChange={this.props.editJobs} value={this.props.role}/>
           <input type="text" id={this.props.id} data-key="company" onChange={this.props.editJobs} value={this.props.company}/>
           <input type="date" id={this.props.id} data-key="dateFrom" onChange={this.props.editJobs} value={this.props.dateFrom} />
           <input type="date" id={this.props.id} data-key="dateTo" onChange={this.props.editJobs} value={this.props.dateTo} />
           <input type="text" id={this.props.id} data-key="duties" onChange={this.props.editJobs} value={this.props.duties}/>
           <button onClick={this.editMode}>Change</button>
         </div>
       )
     }
    }
  
}



export default Jobs;