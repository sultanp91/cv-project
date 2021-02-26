import React, { Component } from 'react'
import uniqid from 'uniqid';
import Studies from './Studies';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../styles/Education.css'

class Education extends Component {
    constructor(){
        super()
        this.state = {
            education: [],
            course: "",
            institution: "",
            dateFrom: "",
            dateTo: "",
            details: "",
            displayForm: true
        }
    }

    inputHandler = (evt) => {
        const key = evt.target.dataset.key
        this.setState({
            [key]: evt.target.value
        })
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        this.setState({
            education: [...this.state.education, {course: this.state.course, institution: this.state.institution,
            dateFrom: this.state.dateFrom, dateTo: this.state.dateTo, details: this.state.details,
            id: uniqid()}],
            course: "",
            institution: "",
            dateFrom: "",
            dateTo: "",
            details: ""
        });
    }

    displayFormHandler = () => {
        this.setState({
          displayForm: !this.state.displayForm
        })
      }

    editStudies = (evt) => {
        const education = Object.assign([],this.state.education)
        const key = evt.target.dataset.key
        education.map((edu) => {
        if(evt.target.id === edu.id){
        edu[key] = evt.target.value
        }
        })
        this.setState({
            education: education
        })
    }

    deleteStudies = (evt) => {
        const education = Object.assign([], this.state.education);
        this.setState({
          education: education.filter(edu => evt.target.id !== edu.id)
        });
      }

            
    render() {
        if(this.state.displayForm){
            return (
                <div className="education-form">
                    <h2>Education</h2>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="course">Course: </label>
                        <input required type="text" data-key="course" onChange={this.inputHandler} name="course" value={this.state.course} />
                        <label htmlFor="institution">Institution: </label>
                        <input required type="text" data-key="institution" onChange={this.inputHandler} name="institution" value={this.state.institution} />
                        <br/>
                        <label htmlFor="datefrom">Start date: </label>
                        <input required type="date" name="datefrom" data-key="dateFrom" value={this.state.dateFrom} onChange={this.inputHandler} />
                        <label htmlFor="dateto">End date: </label>
                        <input required type="date" name="dateto" data-key="dateTo" value={this.state.dateTo} onChange={this.inputHandler}/>
                        <textarea required type="text" rows="5" placeholder="Enter details of course..." data-key="details" name="details" value={this.state.details} onChange={this.inputHandler} />
                        <button type="submit" className="add-button" onSubmit={this.submitHandler}>Add Education Experience</button>
                    </form>
                {this.state.education.map((edu) => 
                    <Studies key={edu.id} id={edu.id} editStudies={this.editStudies} course={edu.course} institution={edu.institution} 
                    dateFrom={edu.dateFrom} dateTo={edu.dateTo} details={edu.details} deleteStudies={this.deleteStudies} />
                )}
                <AiOutlineCloseCircle className="icon" onClick={this.displayFormHandler}  />
                </div>
            ) 
        } else if(!this.state.displayForm){
            return (
                <div className="education-content">
                    <h2>Education</h2>
                    {this.state.education.map((edu) => 
                    <Studies key={edu.id} id={edu.id} editStudies={this.editStudies} course={edu.course} institution={edu.institution} 
                    dateFrom={edu.dateFrom} dateTo={edu.dateTo} details={edu.details} deleteStudies={this.deleteStudies} />
                )}
                <AiOutlinePlusCircle className="icon" onClick={this.displayFormHandler}/>
                </div>
                

            )
        }
        
    }
}

export default Education
