import React, { useEffect } from 'react'
import "./posts.css";
import Post from '../Post/Post';
import {useDispatch, useSelector} from 'react-redux'
import { getTimeLinePosts } from '../../actions/postAction';
import { useParams } from 'react-router-dom';
const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) =>state.AuthReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();
  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);
  if (!posts) return "No post yet!";
  if (params.id) posts = posts.filter((post) => post.userId === params.id); // if it is a profile page we then only render person's own posts not the posts of those he follows
  return (
    <div className="posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
}

export default Posts
