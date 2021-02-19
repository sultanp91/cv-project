import React, { Component } from 'react';

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
      form: false
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
            <div>
                <form>
                    <label htmlFor="aboutme">About me</label>
                    <textarea name="aboutme" onChange={this.formHandler} value={this.state.aboutMe} id="aboutme" 
                    cols="50" rows="15">
      
                    </textarea>
                </form>
                <button onClick={this.editHandler}>Submit</button>
            </div>
          );
    } else if(!this.state.form){
        return (
            <div>
                <h1>About me</h1>
                <p>{this.state.aboutMe}</p>
                <button onClick={this.editHandler}>Edit</button>
            </div>
            

        )
    }
    
  }
}

export default Aboutme;
