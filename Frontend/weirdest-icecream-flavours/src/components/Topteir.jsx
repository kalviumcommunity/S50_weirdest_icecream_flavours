import React from 'react'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';
import bg from '../assets/bg.png'
function Topteir() {
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

export default Topteir