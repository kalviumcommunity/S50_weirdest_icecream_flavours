  import React, { useState, useEffect } from 'react'
  import '../App.css'
  import { Link } from 'react-router-dom';
  // import data from '../data.json'
  // import img from '../assets/logo.png'
  import user from '../assets/user.png'
  import axios from 'axios';
  import heart from '../assets/heart.gif'
  function Portal() {
    const [postdata, setpostdata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3006/posts");
          setpostdata(response.data);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    useEffect(() => {
      console.log(postdata);
    }, [postdata]);



    return (
      <div className='body '>

        <nav className='nav'>
          <ul>
            <Link to="/Portal">
              <li>HOME</li>
            </Link>

            <Link to="/Topteir">
              <li>TOP-TIER</li>
            </Link>

            <Link to="/Posts">
              <li>POST</li>
            </Link>

            <Link to="/User">
              <div className='user'>  <img className="userpg" src={user} alt="" /> Username</div>
            </Link>
          </ul>
        </nav>

        <div className='whole border flex justify-around mt-10'>

  <div className='one-div'> </div>

  <div className='post-div '>
            {postdata.map((post, index) => (
              <div className='hme-post' key={index}>
                <h2>{post.UserName}</h2>
                <div className='img-post'>
                  <img className='icecreams' src={post.Image} alt="" />
                </div>
                <h2 className='title'>{post.Title}</h2>
                <h2 className='des'>{post.Description}</h2>
                <h2 className='like'>😛{post.Like}</h2>
              </div>
            ))}
          </div>

  <div className='three-div'></div>

        </div>

        </div>

      



    )
  }

  export default Portal