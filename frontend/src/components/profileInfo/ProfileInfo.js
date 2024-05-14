import React, { useEffect, useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import "./profileInfo.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from "../../api/UserRequest.js"
import { logOut } from '../../actions/AuthAction.js';
import ProfileModal from '../ProfileModal/ProfileModal.js';


const ProfileInfo = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEditClick = () => {
    setIsFormOpen(true);
  };


  const dispatch = useDispatch()
  const params = useParams()

  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})

  const { user } = useSelector((state) => state.AuthReducer.authData)
  useEffect(() =>{
    const fetchProfileUser = async () => {
      if(profileUserId === user._id) {
        setProfileUser(user)
      } else {
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser();
  }, [user])

  const handleLogOut = () =>{
    dispatch(logOut())
  }


  return (
    <>
      <div className="InfoCard">
        <div className="infoHead">
          <h4>Profile Info</h4>
          {user._id === profileUserId && (
            <div onClick={handleEditClick}>
              <UilPen
                width='2rem'
                height='1.2rem'
              />
            </div>
          )}
          
        </div>
        <div className="info">
          <span><b>Work Status: </b></span>
          <span>{profileUser.workStatus}</span>
        </div>
        <div className="info">
          <span><b>Lives in: </b></span>
          <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
          <span><b>Works at: </b></span>
          <span>{profileUser.workAt}</span>
        </div>
        <button className='logout-butn' onClick={handleLogOut}>Logout</button>
      </div>
      <ProfileModal isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} 
      data={user}/>
    </>
  );
};

export default ProfileInfo;
