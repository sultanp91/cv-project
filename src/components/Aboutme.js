import React, { Component } from 'react';
import { IoIosSave } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import '../styles/Aboutme.css';

class Aboutme extends Component {
  constructor() {
    super();
    this.state = {
      aboutMe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus 
      sapien velit, id iaculis ex placerat non. Cras vulputate nulla et ligula lobortis viverra. 
      Suspendisse accumsan tellus id quam ornare ornare. Fusce vel magna vitae erat fringilla condimentum 
      aliquam id leo. Phasellus maximus iaculis metus, condimentum mattis eros cursus at. Quisque 
      rutrum congue finibus. Aenean at pharetra mauris. Aenean faucibus ipsum nisi, eu eleifend dui 
      consequat in. Curabitur venenatis ligula vel nunc ullamcorper pulvinar. Sed pretium purus non 
      malesuada imperdiet.`,
      form: false,
    };
  }

  formHandler = (evt) => {
    this.setState({
      aboutMe: evt.target.value
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
            <div className="about-me-form">
                <form>
                    <h2>About me</h2>
  
                    <textarea onChange={this.formHandler} value={this.state.aboutMe} id="aboutme" rows="8" />
                </form>
                <hr/>
                <IoIosSave onClick={this.editHandler} className="icon" />
            </div>
          );
    } else if(!this.state.form){
        return (
            <div className="about-me-content">
                <h2>About me</h2>
                <p>{this.state.aboutMe}</p>
                <hr/>
                <FaUserEdit onClick={this.editHandler} className="icon" />
            </div>
            

        )
    }
    
  }
}

export default Aboutme;
