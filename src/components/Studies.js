import React, { Component } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

class Studies extends Component {
    constructor(){
        super()
        this.state = {
            editMode: false
        }
    }

    static propTypes = {
        course: PropTypes.string,
        institution: PropTypes.string,
        dateFrom: PropTypes.string,
        dateTo: PropTypes.string,
        details: PropTypes.string,
        editStudies: PropTypes.func,
        id: PropTypes.string,
    }

    editMode = () => {
        this.setState({
          editMode: !this.state.editMode
        })
      }


    render() {
        if(!this.state.editMode){
            return (
                <div>
                    <h1>{this.props.course}</h1>
                    <h2>{this.props.institution}</h2>
                    <p> {format(new Date(this.props.dateFrom), "do MMMM yy")} to 
                    {format(new Date(this.props.dateTo), "do MMMM yy")}</p>
                    <p>{this.props.details}</p>
                    <button onClick={this.editMode}>Edit</button>
                </div>
            )
        } else if(this.state.editMode){
            return (
                <div>
                    <label htmlFor="course">Course: </label>
                    <input type="text" id={this.props.id} data-key="course" onChange={this.props.editStudies} name="course" value={this.props.course} />
                    <label htmlFor="institution">institution: </label>
                    <input type="text" id={this.props.id} data-key="institution" onChange={this.props.editStudies} name="institution" value={this.props.institution} />
                    <label htmlFor="datefrom">From: </label>
                    <input type="date" id={this.props.id} name="datefrom" data-key="dateFrom" value={this.props.dateFrom} onChange={this.props.editStudies} />
                    <label htmlFor="dateto">To: </label>
                    <input type="date" id={this.props.id} name="dateto" data-key="dateTo" value={this.props.dateTo} onChange={this.props.editStudies}/>
                    <label htmlFor="details">Details: </label>
                    <input type="text" id={this.props.id} data-key="details" name="details" value={this.props.details} onChange={this.props.editStudies} />
                    <button onClick={this.editMode}>Save Changes</button>
                </div>
                
            )
    }
    } 
}

export default Studies
