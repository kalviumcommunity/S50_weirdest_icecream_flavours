import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Add() {

  const [UserName, setUserName] = useState()
  const [Image, setImage] = useState()
  const [Title, setTitle] = useState()
  const [Description, setDescription] = useState()
  const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3006/posts", { UserName, Image, Title, Description })
      .then(result => {
        console.log(result)
        navigate('/Portal')
      })

      .catch(err => console.log(err))
  }



  return (
    <div className=' mt-40  transition   hover:-translate-y-1 hover:scale-110'>
      <form onSubmit={Submit} className=" max-w-md  mx-auto">
        <input
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="name" name="UserName"
          placeholder="UserName:" onChange={(e) => setUserName(e.target.value)} />


        <input
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="URL" name="URL"
          placeholder="URL:" onChange={(e) => setImage(e.target.value)} />



        <input
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="Title" name="Title"
          placeholder="Title:" onChange={(e) => setTitle(e.target.value)} />


        <input
          className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
          type="Description" name="Description"
          placeholder="Description:" onChange={(e) => setDescription(e.target.value)} />

        <br />

        <button type="submit" className="transition mt-2  ml-28 w-36 h-10 text-white rounded-md duration-150 bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 ">
          Add
        </button>


      </form>
    </div>
  )
}

export default Add