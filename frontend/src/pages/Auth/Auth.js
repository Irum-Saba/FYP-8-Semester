import React, { useState } from "react";
import "./auth.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import bgVideo from "../../images/loginbgvideo.mp4";
import poster from "../../images/game development.jpg";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {signUp, logIn} from "../../actions/AuthAction"
import { message } from "antd";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.AuthReducer.loading);
  const signupSuccess = useSelector((state) => state.AuthReducer.success);
  const [data, setData] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(isSignup)
    {
      dispatch(signUp(data))

     // props.showAlert("Registered!", "success");
      if (signupSuccess) {
        console.log(signupSuccess);
        console.log("inside signupSuccess");
        setIsSignup((prev) => !prev);
        resetForm();
        
      }
    }
    else
    {
      dispatch(logIn(data))
      message.success("Login Sucessfully!")
    }
  }
  const resetForm = () =>{
    setData({
      username:"",
      email:"",
      password:""
    })
  }
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <video poster={poster} autoPlay playsInline muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="main_div">
        <div className="box">
          <h1 className="authHeadfing">{isSignup ? "SignUp" : "Login"}</h1>
          <form onSubmit={handleSubmit}>
          {isSignup && (
              <div className="inputBox">
                <input
                  type="text"
                  required
                  name="username"
                  autoComplete="off"
                  placeholder="Username"
                  onChange={handleChange}
                  value={data.username}
                />
                {/* <label>Username</label> */}
              </div>
          )}
            <div className="inputBox">
              <input
                type="text"
                required
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
              />
              {/* <label>Email</label> */}
            </div>
            <div className="inputBox">
              <input
                type={show ? "text" : "password"}
                required
                name="password"
                autoComplete="off"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
                // minLength={5}
              />
              {/* <label>Password</label> */}
              <button className="eyeBtn" onClick={handleClick}>
                {show ? (
                  <BsFillEyeSlashFill style={{ color: "#F15946" }} />
                ) : (
                  <BsFillEyeFill style={{ color: "#F15946" }} />
                )}
              </button>
            </div>
            <input
              type="submit"
              value={loading ? "loading..." : isSignup ? "Signup" : "Login"}
              disabled={loading}
            />
            {/* <input type="submit" value={error?"err...":isSignup?"Signup":"Login"} disabled={loading}/> */}
            {/* <a href="/resetPassword">Forget Password</a> */}
            <br />
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link
                style={{
                  cursor: "pointer",
                  color: "blue",
                  fontWeight: "600",
                }}
                onClick={() => {
                  setIsSignup((prev) => !prev);
                  resetForm();
                }}
              >
                {isSignup ? "Login" : "Signup"}
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
