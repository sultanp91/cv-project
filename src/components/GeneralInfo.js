import React, { Component } from 'react';
import '../styles/Generalinfo.css'

class GeneralInfo extends Component {
    constructor(){
        super()
        this.state = {
            name: "Lorem Ipsum",
            phoneNumber: "07900000000",
            email: "example@lorem.com",
            form: true
        }
    }

   nameHandler = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }

    emailHandler = (evt) => {
        this.setState({
            email: evt.target.value
        })
    }

    numberHandler = (evt) => {
        this.setState({
            phoneNumber: evt.target.value
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
                <div>
                    <form className="general-info-form">
                        <label htmlFor="nameInput">Name: </label>
                        <input type="text" onChange={this.nameHandler} placeholder="Enter name"
                         value={this.state.name} id="nameInput"/>
                         <input type="email" onChange={this.emailHandler} value={this.state.email} 
                         placeholder="Enter e-mail" id="emailInput"/>
                         <input type="tel" onChange={this.numberHandler} value={this.state.phoneNumber} 
                         placeholder="Enter Phone Number" id="phoneInput"/>
                    </form>
                    <button onClick={this.editHandler}>Submit</button>
                </div>
            )
        } else if(!this.state.form){
            return (
                <div className="general-info">
                    <h1>Name: {this.state.name}</h1>
                    <p>Email: {this.state.email}</p>
                    <p>Number: {this.state.phoneNumber}</p>
                    <button onClick={this.editHandler}>Edit</button>
                </div>
            )
        }
        
    }
}

export default GeneralInfo
