import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="containerLogin">
      <div className="titleContainer">
        <h1 className="mainTitle">Lamasocial</h1>
        <span className="descTitle">
          Connect with friends and the world around you on Lamasocial
        </span>
      </div>
      <div className="formContainer">
        <input type="text" className="formInput" placeholder="Fasd" />
        <input type="text" className="formInput" placeholder="Dasf" />
        <button className="logButton">Log In</button>
        <a href="#" className="linkPass">
          Forgot Password?
        </a>
        <button className="createButton">Create a New Account</button>
      </div>
    </div>
  );
};

export default Login;
