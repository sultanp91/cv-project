import React, { Component } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { IoTrashOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosSave } from "react-icons/io";
import '../styles/Studies.css'

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
        deleteStudies: PropTypes.func,
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
                <div className="studies">
                    <p><b>{this.props.course}</b></p>
                    <p>{this.props.institution}</p>
                    <p><em>{format(new Date(this.props.dateFrom), "do MMMM yy")} to 
                    {format(new Date(this.props.dateTo), "do MMMM yy")}</em></p>
                    <p>{this.props.details}</p>
                    <IoTrashOutline id={this.props.id} className="icon" onClick={this.props.deleteStudies}/>
                    <FaRegEdit className="edit-icon" onClick={this.editMode}/>
                </div>
            )
        } else if(this.state.editMode){
            return (
                <div className="studies">
                    <label htmlFor="course">Course: </label>
                    <input type="text" id={this.props.id} data-key="course" onChange={this.props.editStudies} name="course" value={this.props.course} />
                    <label htmlFor="institution">Institution: </label>
                    <input type="text" id={this.props.id} data-key="institution" onChange={this.props.editStudies} name="institution" value={this.props.institution} />
                    <br/>
                    <label htmlFor="datefrom">Start Date: </label>
                    <input type="date" id={this.props.id} name="datefrom" data-key="dateFrom" value={this.props.dateFrom} onChange={this.props.editStudies} />
                    <label htmlFor="dateto">End date: </label>
                    <input type="date" id={this.props.id} name="dateto" data-key="dateTo" value={this.props.dateTo} onChange={this.props.editStudies}/>
                    <br/><label htmlFor="details">Details: </label>
                    <textarea rows="5" id={this.props.id} data-key="details" name="details" value={this.props.details} onChange={this.props.editStudies} />
                    <IoIosSave className="edit-icon" onClick={this.editMode}/>
                    <IoTrashOutline className="icon" id={this.props.id} onClick={this.props.deleteStudies}/>
                </div>
                
            )
    }
    } 
}

export default Studies
