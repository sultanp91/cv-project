import React, { Component } from 'react'
import uniqid from 'uniqid';

class Education extends Component {
    constructor(){
        super()
        this.state = {
            education: [],
            course: "",
            institution: "",
            dateFrom: "",
            dateTo: "",
            details: ""
        }
    }

    inputHandler = (evt) => {
        const key = evt.target.dataset.key
        this.setState({
            [key]: evt.target.value
        })
    }

    submitHandler = (evt) => {
        evt.preventDfault()
        this.setState({
            education: [...this.state.education, {course: this.state.course, institution: this.state.institution,
            dateFrom: this.state.dateFrom, dateTo: this.state.dateTo, details: this.state.details,
            id: uniqid()}],
            course: "",
            institution: "",
            dateFrom: "",
            dateTo: "",
            details: ""
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

            
    render() {

        return (
            <div>
                <h1>Education</h1>
                <form>
                    <label htmlFor="course">Course: </label>
                    <input type="text" data-key="course" onChange={this.inputHandler} name="course" value={this.state.course} />
                    <label htmlFor="institution">institution: </label>
                    <input type="text" data-key="institution" onChange={this.inputHandler} name="institution" value={this.state.institution} />
                    <label htmlFor="datefrom">From: </label>
                    <input type="date" name="datefrom" data-key="dateFrom" value={this.state.dateFrom} onChange={this.inputHandler} />
                    <label htmlFor="dateto">To: </label>
                    <input type="date" name="dateto" data-key="dateTo" value={this.state.dateTo} onChange={this.inputHandler}/>
                    <label htmlFor="details">Details: </label>
                    <input type="text" data-key="details" name="details" value={this.state.details} onChange={this.inputHandler} />
                </form>
            </div>
        )
    }
}

export default Education
