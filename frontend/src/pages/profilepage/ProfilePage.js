import React from 'react';
import './profilePage.css';

import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/socialpage/TopBar';
import ProfileLeft from '../../components/profileleft/ProfileLeft';
import ProfileMiddle from '../../components/FollowersCard/ProfileMiddle';
function ProfilePage() {
  return (
    <>
    <TopBar/>
      <div className="Profilepage">
        <SideBar/>
        <ProfileMiddle />
        <ProfileLeft/>
      </div>
    </>
  );
}

export default ProfilePage;
