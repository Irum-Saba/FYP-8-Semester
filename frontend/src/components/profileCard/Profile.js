import React from 'react'
import "./profile.css"
import cover from "../../images/feed-6.jpg"
import profile from "../../images/user.png"
import { useSelector } from 'react-redux'
// import { Link } from "react-router-dom";
function Profile() {
  const {user} = useSelector((state) =>state.AuthReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  //const ProfilePage = true

  return (
    <div className="profile">
        <div className="ProfileImages">
        <img
            src={user.coverPicture ? serverPublic +`${user.coverPicture}` : serverPublic + "feed-6.jpg"}
            alt="coverImg"
          />

          <img
            src={user.profilePicture ? serverPublic +`${user.profilePicture}` : serverPublic + "user.jpg"}
            alt="profileImg"
          />
        </div>
        <div className="ProfileName">
          <span>{user.username}</span>
          <span>{user.workStatus? user.workStatus: "Write about yourself"}</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{user.following.length}</span>
              <span>Following</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
            <span>
                    {posts?.filter((post) => post.userId === user._id).length}
                  </span>
              <span>Posts</span>
            </div>
          </div>
          <hr />
        </div>
        {/* {location === "profilePage" ? (
          ""
        ) : (
          <span>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/profile/${user._id}`}
            >
              My Profile
            </Link>
          </span>
        )} */}
    </div>
  )
}

export default Profile
