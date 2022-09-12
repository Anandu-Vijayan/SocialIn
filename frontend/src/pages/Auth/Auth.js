import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a_left">
        <img className="logo" src={Logo} alt="" />
        <div className="Webname">
          <h1>SocialIn</h1>
          <h6>Connect Everyone</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};
function Login(){
    return(
      <div className="a-right">
      <form className="infoForm authForm">
        <h3>Login</h3>
        
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          
        </div>
        <div>
            <span style={{fontSize:'12px'}}>I don't have Account Signup</span>
        </div>
        <button className="button infoButton" type="submit">Login</button>
      </form>
    </div>
    )}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Signup</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="ConfirmPassword"
            className="infoInput"
            name="confirmpassword"
          />
        </div>
        <div>
            <span style={{fontSize:'12px'}}>Already have an account . Login</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
