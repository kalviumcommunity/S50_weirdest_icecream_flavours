import React from 'react'
import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Update() {
const{id}=useParams();
const[UserName, setUserName]=useState('')
const[Image, setImage]=useState('')
const[Title, setTitle]=useState('')
const[Description, setDescription]=useState('')
const navigate = useNavigate()
useEffect(() => {
  axios.get(`http://localhost:3006/posts/${id}`)
  .then(result=>{console.log(result)
    setUserName(result.data.UserName)
    setImage(result.data.Image)
    setTitle(result.data.Title)
    setDescription(result.data.Description)
})
  .catch(err=>console.log(err))
  

  }, [id]);

const Edit=(e)=>{
  e.preventDefault();
  axios.put(`http://localhost:3006/posts/${id}`,{UserName,Image,Title,Description})
  .then(result=>{console.log(result)
   navigate('/Portal')
  })

}

  return (
    <div className=' mt-40  transition   hover:-translate-y-1 hover:scale-110'>
        <form onSubmit={Edit} className=" max-w-md  mx-auto">
    <input 
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="name" name="UserName"
          placeholder="UserName:"  
          value={UserName}  onChange={(e)=>setUserName(e.target.value)}/>
      
  
  <input 
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="URL"  name="URL"
          placeholder="URL:"  value={Image} onChange={(e)=>setImage(e.target.value)}/>

  
  
  <input 
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="Title"   name="Title"
          placeholder="Title:"  value={Title}   onChange={(e)=>setTitle(e.target.value)}/>
  

        <input 
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="Description"   name="Description"
          placeholder="Description:" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
     
        <br />

                    <button type="submit" className="transition mt-2  ml-28 w-36 h-10 text-white rounded-md duration-150 bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 ">
                    Update
                    </button>
               
               
   </form>
    </div>  )
}

export default Update