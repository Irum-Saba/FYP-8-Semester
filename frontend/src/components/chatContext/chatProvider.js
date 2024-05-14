
const { createContext, useContext, useState } = require("react");
const chatContext = createContext();

const ChatProvider = ({ children }) => {

  // const { user } = useSelector((state) => state.authReducer.authData);
  const [userInfo, setUserInfo] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);
  // useEffect(() => {
  //   setUserInfo(user);
  //   if (!userInfo) {
  //     navigate("/auth");
  //   }
  // }, [navigate]);

  return (
    <chatContext.Provider
      value={{
        // user,
        userInfo,
        setUserInfo,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(chatContext);
};
export default ChatProvider;
