import React, { useEffect, useState } from 'react'
import "./followersCard.css"
import User from '../user/User';
import {useSelector} from 'react-redux';
import { getAllUsers } from '../../api/UserRequest';

const FollowersCard=()=> {
  const {user} = useSelector((state)=>state.AuthReducer.authData)
  const [persons, setPersons] = useState([])
  useEffect(() =>{
    const fetchPersons = async() =>{
      const {data} = await getAllUsers();
      setPersons(data)
      console.log(data)
    };
    fetchPersons()
  },[]);
  return (
    <>
    <div className="FollowersCard">
           <div className="messages">
        <div className="heading">
          <h3>People you may know</h3>
          <i className="uil uil-user"></i>
        </div>
        {/* <!-- -----SEARCH BAR---- --> */}
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search Name..."
            id="message-search"
         
          />
        </div>
        </div>
        {persons.map((person, id)=>{
          if(person._id !== user._id)
            {
              return(
                <User person ={person} key = {id}/>
            )
            }
            
        })}
    </div>
    </>
  )
}

export default FollowersCard
