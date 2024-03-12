import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/user.png';
import bin from '../assets/bin.png';
import add from '../assets/add.png';
import editing from '../assets/editing.png';
import axios from 'axios';
import Cookies from 'js-cookie';

function Portal() {
  const [postdata, setPostData] = useState([]);
  // const[post,setPost]=useState([])
  const [filterPost, setfilterPost] = useState([])
  const [userSelected, setuserSelected] = useState('')
  const username = Cookies.get('username');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3006/posts");
        setPostData(response.data);
        setfilterPost(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(postdata);
  }, [postdata]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3006/posts/${id}`)
      .then(res => {
        setPostData(prevPostdata => prevPostdata.filter(post => post._id !== id));
        // console.log(res);
      })
      .catch(error => console.log(error));
  }

  const userseleFUn = (e) => {
    if (e == 'All' || e == '' ) {
      setfilterPost(postdata)
    }
    else {
      const filter = postdata.filter(post => post.UserName == e)
      setfilterPost(filter)
    }

  }

  const names = Array.from(new Set(postdata.map(post => post.UserName)))

  const LogOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      Cookies.remove('token');
      Cookies.remove('username');
      Cookies.remove('userData');
      navigate('/');
    }
  }

  return (

    <div className='body'>
      <nav className='nav'>
        <ul>
          <li>HOME</li>

          <div>
            <select className=' border outline-rose-900 border-rose-900 rounded-xl w-60 h-9' id='filter' onChange={(e) => userseleFUn(e.target.value)}>
              <option value="">Select Users</option>
              <option value="">All</option>
              {names.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}

            </select>
          </div>

          <div className='user' onClick={LogOut}>
            <div className='user'>  <img className="userpg" src={user} alt="" /> {username}</div>
          </div>
        </ul>
      </nav>

      <div className='whole border flex justify-around mt-10'>
        <div className='one-div'>
          <Link to="/Add">
            <div className='add-post'>  <img className="add" src={add} alt="" />Add Post</div>
          </Link>
        </div>

        <div className='post-div'>
          {filterPost.map((post, index) => (
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
                <img className='bin' onClick={(e) => handleDelete(post._id)} src={bin} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className='three-div'></div>
      </div>
    </div>
  );
}

export default Portal;
