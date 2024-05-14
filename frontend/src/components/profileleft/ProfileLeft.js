import React from 'react'
import ProfileInfo from '../profileInfo/ProfileInfo'
import FollowersCard from '../FollowersCard/FollowersCard'

function ProfileLeft() {
  return (
    <div className="profileleft">
        <ProfileInfo/>
        <FollowersCard/>
        </div>
  )
}

export default ProfileLeft
