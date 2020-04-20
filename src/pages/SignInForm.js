import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SignInForm extends Component {
  render(){
    return (
    <div className="FormCenter">
      <form className="FormFields" >


        {/*Field for E-mail */}
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email"> E-mail Address </label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your E-mail" name="email" />
        </div>

        {/*Field for Password */}
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password"> Password </label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20"> Sign In </button> <a href="#" className="FormField__Link">
          Create an account</a>
        </div>


      </form>
    </div>
    );
  }
}

export default SignInForm;
