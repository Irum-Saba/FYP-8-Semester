
import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import About from './pages/aboutus/About';
import ContactUs from './pages/contact/ContactUs';
import ArtisticTools from "./pages/aiTools/ArtisticTools";
import Courses from "./pages/course/Courses"
import SocialPage from './pages/socialpage/SocialPage';
import ProfilePage from './pages/profilepage/ProfilePage';
import { Navigate, Route, Routes, } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Applytrainer from './pages/applyfortrainer/applytrainer';
import { useSelector } from 'react-redux'
import ChatPage from './pages/chat/ChatPage';



function App() {
  const user = useSelector((state) =>state.AuthReducer.authData)
  return (
   
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/ArtisticTools" element={<ArtisticTools/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/SocialPage" element={<SocialPage />} />
        <Route path="/profile/:id" 
        element={user? <ProfilePage /> : <Navigate to="../auth"/>}/>
        <Route path="/applytrainer" element={ <Applytrainer />}/>
        <Route path="/auth" element={ <Auth />}/>
        <Route
            path="/chatpage"
            element={user ? <ChatPage /> : <Navigate to="../auth" />}
          />
          

          <Route path="/" element={user ? <SocialPage /> : <Home />} />
        

       

          <Route
            path="/auth"
            element={
              user ? (
                <Navigate to="../SocialPage" />
              ) : (
                <Auth  />
              )
            }
          />


       {/* <Route path='/' element = {user?<Navigate to= "/SocialPage"/>: <Navigate to= "/auth"/>}/>
        <Route path='/SocialPage' element = {user?<SocialPage/>:<Navigate to= "../auth"/>}/>
        <Route path='/auth'  element={user?<Navigate to ='../SocialPage'/>:<Auth/>}/>  */}
      </Routes>

  );
}

export default App;

