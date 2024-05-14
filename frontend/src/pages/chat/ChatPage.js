import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SideDrawer from '../../components/chat/SideDrawer';
import ChatBox from '../../components/chat/ChatBox';
import MyChats from '../../components/chat/MyChats';
import './chatpage.css'
const ChatPage = () => {
    const { user } = useSelector((state) => state.AuthReducer.authData);
    const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
        {user && <SideDrawer/>}
        <div className="chatContainer">
          <div>{user && <MyChats fetchAgain={fetchAgain}/>}</div>
          <div>
            {user && (
              <ChatBox />
            )}
          </div>
        </div>
      
    </div>
  )
}

export default ChatPage
