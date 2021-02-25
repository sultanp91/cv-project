import React, { Component } from 'react';
import '../styles/Generalinfo.css';
import { IoIosSave } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";


class GeneralInfo extends Component {
    constructor(){
        super()
        this.state = {
            name: "Lorem Ipsum",
            jobTitle: "Web Developer",
            phoneNumber: "07900000000",
            email: "example@lorem.com",
            form: true
        }
    }

   inputHandler = (evt) => {
        const key = evt.target.dataset.key
        this.setState({
            [key]: evt.target.value
        })
    }

    editHandler = () => {
        this.setState({
            form: !this.state.form
        })
    }

    render() {
        if(this.state.form){
            return (
                <div className="general-info" >
                    <form className="general-info-form">
        
                            <label htmlFor="nameInput">Name: </label>
                            <input type="text" data-key="name" onChange={this.inputHandler} placeholder="Enter name"
                            value={this.state.name} id="nameInput"/>
                            <label htmlFor="jobTitle">Job Title: </label>
                            <input type="text" data-key="jobTitle" onChange={this.inputHandler} placeholder="Enter job title"
                            value={this.state.jobTitle} id="jobTitle"/>
                            <label htmlFor="emailInput">Email: </label>
                            <input type="email" data-key="email" onChange={this.inputHandler} value={this.state.email} 
                            placeholder="Enter e-mail" id="emailInput"/>
                            <label htmlFor="phoneInput">Phone Number: </label>
                            <input type="tel" data-key="phoneNumber" onChange={this.inputHandler} value={this.state.phoneNumber} 
                            placeholder="Enter Phone Number" id="phoneInput"/>


                    </form>
                    <IoIosSave onClick={this.editHandler} className="general-info-icon" />      
                </div>
            )
        } else if(!this.state.form){
            return (
                <div className="general-info">
                    <div className="general-info-content">
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.jobTitle}</h2>
                        <hr/>
                        <div className="contact">
                        <p>Email: {this.state.email}</p>
                        <p>Number: {this.state.phoneNumber}</p>
                        </div>
                        
                        <FaUserEdit onClick={this.editHandler} className="general-info-icon" />
                    </div>
                    <hr/>
                </div>
              
            )
        }
        
    }
}

export default GeneralInfo
