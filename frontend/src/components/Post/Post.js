import React, { useEffect, useState } from 'react'
import './post.css'
import axios from "axios";
import Comment from '../../images/comment.png';
import Heart from '../../images/like.png';
import NotLike from '../../images/unlike.png';
import {useSelector} from "react-redux";
import { likePost } from '../../api/PostRequest';
import { message } from "antd";
import { Modal } from "antd";
const Post = ({data}) => {
  const {user} = useSelector((state) =>state.AuthReducer.authData)
  let [liked, setLiked] =useState(data.likes.includes(user._id))
  let [likes,setLikes] = useState(data.likes.length)
  const [authorName, setAuthorName] = useState('');

  const [modal2Open, setModal2Open] = useState(false);
  const [recordId, setRecordId] = useState(null);

  useEffect(() => {
    // Fetch the user's name based on the userId associated with the post
    const fetchAuthorName = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${data.userId}`);
        setAuthorName(response.data.username);
      } catch (error) {
        console.error('Error fetching author name:', error);
      }
    };

    fetchAuthorName();
  }, [data.userId]);
 

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/post/${id}`, {
        data: {
          userId: user._id,
        },
      });
      if (response.data.success) {
        message.success(response.data.message);
      }
      window.location.reload();
      // Filter out the deleted user from the users array
      // const updatedPostsList = data.filter((post) => post._id !== id);
      // Update the users state with the filtered array
      // setAppointments(updatedPostsList);
    } catch (error) {
      console.error(error);

      message.error("Error deleting post!");
    }
  };
  const handleClick = (id) => {
    handleDelete(id);
    setModal2Open(false);
  };


  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      // timeZone: "UTC",
      // timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options);
  }
  const formattedDate = formatDate(data.createdAt);
  return (
    <div className="Post">
        <img src={data.image?process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt="" />
        <div className="postReact">
            <img src={liked?Heart:NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike}/>
            <img src={Comment} alt="" />

            {/* delete post */}
            {/* <img className="reactions" src={share} alt="" /> */}
          {/* <button onClick={() => handleDelete(data._id)}>delete</button> */}
          {data.userId === user._id && ( //only delete own post(s)
            <i
              style={{
                fontSize: "2.3rem",
                marginTop: "-1%",
                cursor: "pointer",
                color: "red",
              }}
              onClick={() => {
                setRecordId(data._id);
                setModal2Open(true);
              }}
              className="uil uil-trash-alt reactions"
            ></i>
          )}
          {/* delete end */}
        </div>
        <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
        <div className="detail">
            <span>{data.desc}</span>
            <span>
            <strong style={{ color: "gray" }}>Posted By: </strong>
            <b>{authorName}</b>
          </span>
            <p ><b style={{ color: "gray" }}>Post Created At: </b> {formattedDate}</p>
        </div>
        <Modal
          title="Confirmation"
          okText="Delete"
          okType="danger"
          centered
          open={modal2Open}
          onOk={() => handleClick(recordId)}
          onCancel={() => {
            setModal2Open(false);
            setRecordId(null);
          }}
        >
          <p>Are you sure, you want to delete this Post permanently?</p>
        </Modal>
    </div>
    
  )
}

export default Post
