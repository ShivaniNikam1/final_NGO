// import React from "react";
// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import loginImg from "../images/care.png";

// const Login = () => {
//   const Navigate = useNavigate();

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h1 className="login__heading">NGOConnect Login</h1>
//           <img src={loginImg} className="loginpage__img" alt="" />
//         </div>
//         <div className="loginRight">
//           <div className="loginBox">
//             <input placeholder="Email" className="loginInput" />
//             <input placeholder="Password" className="loginInput" />
//             <button className="loginButton" onClick={() => Navigate("/")}>
//               Log In
//             </button>
//             <span className="loginForgot">Forgot Password?</span>
//             <button
//               className="loginRegisterButton"
//               onClick={() => Navigate("/signup")}
//             >
//               Create a New Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React  from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/care.png";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const Navigate = useNavigate();
  
  const [email,setEmail] = useState('')
   const[password,setPassword]=useState('')


   axios.defaults.withCredentials = true;
   async function submit(e){
     e.preventDefault();
     try{
       const response = await axios.post("http://localhost:5000/api/users/login",{
         email,password
       })
       .then(res => {
        console.log(res.data)
         if(res.data.message === "Success" )
         {
           // localStorage.setItem('jwtToken', res.data.token); 
           // console.log(res.data.user) 
           // setUser(res.data.user)
           // console.log(rootuser)
  
           Navigate("/")
         }else if(res.data.message === "Password incorrect")
         {
           alert("Incorrect password")
   
         }
         else if(res.data.message === "notexists"){
           alert("User has not signed in")
         }
       })
       .catch(e => {
         alert("Wrong credentials")
         console.log(e)
       })
     }
     catch(e){
       console.log(e)
     }
   }
   

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="login__heading">NGOConnect Login</h1>
          <img src={loginImg} className="loginpage__img" alt="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input placeholder="Password" className="loginInput" onChange={(e)=>{setPassword(e.target.value)}} />
            <button className="loginButton" onClick={submit}>
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
};

export default Login;
