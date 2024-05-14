import React from 'react'
import './socialpage.css';
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/socialpage/TopBar';
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import PostSide from '../../components/PostSide/PostSide';
const SocialPage = () => {
  return (
    <>
    <TopBar/>
    <div className="Socialpage">
      <SideBar/>
      <PostSide/>
      <FollowersCard/>
    </div>
    </>
  )
}

export default SocialPage
