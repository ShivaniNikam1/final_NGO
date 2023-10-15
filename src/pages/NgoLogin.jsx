import React from 'react'
import { useNavigate } from "react-router-dom";
import loginImg from "../images/care.png";

const NgoLogin = () => {
    const Navigate = useNavigate();
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h1 className="login__heading">NGOConnect Login</h1>
            <img src={loginImg} className="loginpage__img" alt="" />
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton" onClick={() => Navigate("/NgoProfile")}>
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button
                className="loginRegisterButton"
                onClick={() => Navigate("/signup")}
              >
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NgoLogin