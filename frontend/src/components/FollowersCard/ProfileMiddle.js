import React from 'react'
import FollowersCard from './FollowersCard'
import PostSide from '../PostSide/PostSide'
import Profile from "../profileCard/Profile"
const ProfileMiddle = () => {
  return (
    <div className='profileMiddle'>
        <Profile/>
        <PostSide/>
    </div>
  )
}

export default ProfileMiddle
