  import React, { useState, useEffect } from 'react'
  import '../App.css'
  import { Link } from 'react-router-dom';
  import user from '../assets/user.png'
  import bin from '../assets/bin.png'
import add from '../assets/add.png'
  import editing from '../assets/editing.png'
  import axios from 'axios';
  
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

const handleDelete=(id)=>{
  axios.delete(`http://localhost:3006/posts/${id}`)
  .then(res=>{
    setpostdata(prevPostdata=>prevPostdata.filter(post=> post._id !== id))
    console.log(res)})
  .catch(error=>console.log(error))
}

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

  <div className='one-div'> 
  <Link to="/Add">
              <div className='add-post'>  <img className="add" src={add} alt="" />Add Post</div>
            </Link>
  
  </div>

  <div className='post-div'>
            {postdata.map((post, index) => (
              <div className='hme-post' key={index}>
                <h2>{post.UserName}</h2>
                <div className='img-post'>
                  <img className='icecreams' src={post.Image} alt="" />
                </div>
                <h2 className='title'>{post.Title}</h2>
                <h2 className='des'>{post.Description}</h2>
                <h2 className='like'>😛{post.Like}</h2>
                <div className='update'>

                 <Link to={`/Update/${post._id}`}><img className='edit' src={editing} alt="" /></Link>
                
                <img className='bin' onClick={(e)=>handleDelete(post._id)} src={bin} alt="" />
                </div>
              </div>
            ))}
          </div>

  <div className='three-div'></div>

        </div>

        </div>

      



    )
  }

  export default Portal