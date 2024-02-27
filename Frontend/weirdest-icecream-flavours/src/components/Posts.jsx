import React from 'react'
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

export default function Posts() {
  return (
    <>
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

  <Link  to="/User">
 <div className='user'>  <img className="userpg" src={user} alt="" /> Username</div>
 </Link>
</ul>
  </nav>
  </>
  )
}
