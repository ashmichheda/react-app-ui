import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SignUpForm extends Component {
  render(){
    return (
    <div className="FormCenter">
      <form className="FormFields" >

        {/* Field for Full Name */}
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name"> Full Name </label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your Full name" name="name" />
        </div>

        {/*Field for Password */}
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password"> Password </label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
        </div>

        {/*Field for E-mail */}
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email"> E-mail Address </label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your E-mail" name="email" />
        </div>

        {/* Label for terms of service */}
        <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />
            I agree all statements in <a href="" className="FormField__TermsLink"> terms of service</a>
          </label>
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20"> Sign Up </button> <a href="#" className="FormField__Link">
          I'm already member</a>
        </div>


      </form>
    </div>
    );
  }
}

export default SignUpForm;
