import React from 'react'
import '../App.css'
import data from '../data.json'
import img from '../assets/logo.png'
function Portal() {


  return (
    <>
   

   {data.map((users,index)=>{
    return(
      <div className='datas' key={index}>
        <h1>{users.UserName}</h1>
    <h1>{users.Email}</h1>
    <h1>{users.Password}</h1>
      </div>
    )
   })}
   
   
    {/* <div className='Logo'><img src={img} alt="" /></div>
    <div className='Circular-div'>
  <div className='circle'>
  
  </div>
  </div> */}

<div></div>


    </>
  )
}

export default Portal