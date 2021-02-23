import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    id: PropTypes.string,
    editJobs: PropTypes.func,
    index: PropTypes.number

  }
  render() {

     if(!this.state.editMode){
      return (
        <div>
         <h1>{this.props.role}</h1>
         <button onClick={this.editMode}>Change</button>
        </div>
      )
     }  else if(this.state.editMode){
       return (
         <div>
           <input type="text" id={this.props.id} onChange={this.props.editJobs} value={this.props.role} />
           <button onClick={this.editMode}>Change</button>
         </div>
       )
     }
    }
  
}



export default Jobs;