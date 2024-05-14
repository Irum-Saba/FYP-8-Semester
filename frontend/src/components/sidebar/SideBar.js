import React from "react";
import { NavLink, Link } from "react-router-dom";
import'./sideBar.css';
import { useSelector } from 'react-redux'


const SideBar= ()=> {
  const {user} = useSelector((state) =>state.AuthReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
    <div className="left">
        <Link className="profileBox">
          <div className="profile-picture">
            <img
              src={user.profilePicture ? serverPublic +`${user.profilePicture}` : serverPublic + "user.jpg"}
              alt="profileImg"
            />
          </div>
          <div className="handle">
            <h4>{user?.username}</h4>
            <p className="text-muted">{user?.email}</p>
          </div>
        </Link>
    <div className="sidebar">
          <NavLink className="menu-item" to="/SocialPage">
            <span className="iconImg">
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </NavLink>
          <NavLink className="menu-item" to={`/profile/${user._id}`}>
            <span className="iconImg">
              <i className="uil uil-user-circle"></i>
            </span>
            <h3>Profile</h3>
          </NavLink>
          <Link className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-palette"></i>
            </span>
            <h3>Theme</h3>
          </Link>
          <NavLink className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-files-landscapes"></i>
            </span>
            <h3>Courses</h3>
          </NavLink>
          <NavLink className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-upload-alt"></i>
            </span>
            <h3>Upload Task</h3>
          </NavLink>
          <Link
            className="menu-item" to="/">
            <span className="iconImg">
              <i class="uil uil-moon"></i>
            </span>
            <h3>Toggle</h3>
          </Link>

          <NavLink className="menu-item" to="/chatpage">
            <span className="iconImg">
              <i className="uil uil-comment-dots"></i>
            </span>
            <h3>Chat</h3>
          </NavLink>
          <NavLink className="menu-item" to="/applytrainer">
            <span className="iconImg">
              <i className="uil uil-user-check"></i>
            </span>
            <h3>Apply For Trainer</h3>
          </NavLink>

          {/* <!-- <Link className="menu-item">
        <span><i className="uil uil-signal-alt-3"></i></span><h3>Reports</h3>
    </Link> --> */}
       <Link
          className="button primary"
          htmlFor="create-post"
          >
          Create
        </Link>
        </div>
        </div>
        </> 
     
  )
}

export default SideBar
