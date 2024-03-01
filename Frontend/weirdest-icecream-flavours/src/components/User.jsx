import React, { useState, useEffect } from 'react'
import './user.css'
import axios from 'axios';

function User() {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3006/users");
        setuserdata(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (

    <><div className='user-div '>
    {userdata.map((user, index) => (
      <div className='users' key={index}>
        <h2>{user.UserName}</h2>
        <h2 >{user.Email}</h2>
        <h2 >{user.Password}</h2>
      
      </div>
    ))}
  </div></>
  )
}

export default User
