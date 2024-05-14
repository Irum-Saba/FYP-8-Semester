import React, { useState } from "react";
import { UilTimes } from '@iconscout/react-unicons';
import './profileModal.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {uploadImage} from "../../actions/uploadAction";
import { updateUser } from "../../actions/userAction";


const ProfileModal = ({ isFormOpen, setIsFormOpen, data }) => {
  const {password, ...other} =data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const params = useParams()

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const{user} = useSelector((state)=>state.AuthReducer.authData)
  const handleCloseClick = () => {
    setIsFormOpen(false);
  };

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0])  {
      let img = event.target.files[0];
      event.target.name === "profilePicture"
      ? setProfileImage(img)
      : setCoverImage(img)
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    let UserData = formData;
    if(profileImage){
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    if(coverImage){
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(params.id, UserData))
    setIsFormOpen(false)
  }
  return (
    isFormOpen && (
      <div className="editForm">
        <div className="formHeader">
          <h4 style={{ fontSize: 'small', fontWeight: 'bold' }}>Edit Profile</h4>
          <div onClick={handleCloseClick}>
            <UilTimes
              width='1.5rem'
              height='1.5rem'
            />
          </div>
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='username' 
          placeholder='Username'
          onChange={handleChange}
          value={formData.username}
          />
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='email' 
          placeholder='Email'
          onChange={handleChange}
          value={formData.email}
          />
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='password' 
          placeholder='Password'
          onChange={handleChange}
          value={formData.password}
          />
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='workStatus' 
          placeholder='Work Status'
          onChange={handleChange}
          value={formData.workStatus}
          />
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='livesin' 
          placeholder='Lives In'
          onChange={handleChange}
          value={formData.livesin}
          />
        </div>
        <div>
          <input 
          type='text' 
          className='infoInput' 
          name='workAt' 
          placeholder='Work At'
          onChange={handleChange}
          value={formData.workAt}
          />
        </div>
        <div>
          Profile Image
          <input type='file' name='profilePicture' onChange={onImageChange}/>
        </div>
        <div>
          Cover Image
          <input type='file' name='coverPicture' onChange={onImageChange}/>
        </div>
        <button className='button' onClick={handleSubmit}>Update</button>

      </div>
    )
  );
}

export default ProfileModal;
