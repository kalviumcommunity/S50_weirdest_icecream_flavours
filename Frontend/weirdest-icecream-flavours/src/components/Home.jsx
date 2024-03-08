import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import '../App.css'
import axios from 'axios'

function Home() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const[userdata,setuserdata]=useState(); 
  const navigate=useNavigate();
  const onSubmit = async (data) => {
   
    try {

        const response = await axios.post('http://localhost:3006/users', {data}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            setuserdata(data); 
            alert("Siged up successfully")
            navigate('/Portal'); 
        } else {
            console.error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error); 
    }
}

  return (
    <> 

<div className="bg-contain h-screen bg-center flex justify-center items-center"  style={{backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03ed66139840229.623729a4e9e80.jpg')"}}>


<div className=" h-full w-full flex justify-center items-center backdrop-filter backdrop-blur-sm">
 
 <div className=" w-2/3 h-3/4 shadow-2xl rounded-md bg-gray-100 ">
  <h1 className='text-center text-5xl font-serif mt-4 text-rose-900'>Weirdest Icecream Flavours </h1>
  <p className='text-center text-lg font-serif  mt-2'>Explore the weirdest ice cream flavors ever created on our website! From bizarre combinations to unexpected tastes, we've got it all. Want to discover more? Sign up today!</p>
  
  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md  mx-auto">
  <input 
        className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="name" name="UserName"
        placeholder="Name:" {...register('UserName', { required: "Username is required", minLength: { value: 4, message: "Username must be more than 4 characters" }, maxLength: { value: 15, message: "Username must be less than 15 characters" } })}
      />
      <p className='text-rose-900'>{errors.name?.message}</p>

<input 
        className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="email"  name="Email"
        placeholder="E-mail:"  {...register('Email', { required: "E-mail is required", pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email" } })}
      />
<p className='text-rose-900'>{errors.email?.message}</p>


<input 
        className="border mt-2 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="password"   name="Password"
        placeholder="Password:"{...register('Password', { required: "Password is required", minLength: { value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password must be less than 10 characters" } })}
      />
      <p className='text-rose-900'>{errors.password?.message}</p>
      <br />

      {userdata ? (
                <p className="text-rose-900 font-bold text-lg mt-4">Signed up successfully!</p>
              ) : (
                <>
                  <p>Already have an account? <Link to="/SignIn"><u>Sign In</u></Link></p>
                  <button type="submit" className="transition mt-2  ml-28 w-36 h-10 text-white rounded-md duration-150 bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 ">
                    Sign Up
                  </button>
                </>
              )}
 </form>

 </div>
</div>


</div>

  </>
  )
}

export default Home
