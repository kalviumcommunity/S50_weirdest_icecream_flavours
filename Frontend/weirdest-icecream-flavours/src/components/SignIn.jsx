import React from 'react'
import {useForm} from 'react-hook-form'
import { useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

function SignIn() {
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const[data,setData]=useState();
    const[sub,setSub]=useState(false);
    const [userData, setUserData] = useState([]);
    const [UserName, setUserName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3006/users');
                setUserData(response.data);
            } catch (error) {
                console.log("Error while fetching", error);
            }
        }
    
        fetchData();
    }, []);
    
    const onSubmit = async (formData) => {
        setData(formData); 
        if (userData && userData.length > 0) { 
            const user = userData.find(
                (user) => user.UserName === formData.UserName && user.Password === formData.Password
            );
            if (user) {
                console.log(user);
                Cookies.set("username",user.UserName);
                setSub(true);
                navigate("/Portal");
            } else {
                console.log("Invalid email or password");
            }
        } else {
            console.log("User data is not available yet.");
        }
    }
    
  return (
    <> 

    <div className="bg-contain h-screen bg-center flex justify-center items-center"  style={{backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03ed66139840229.623729a4e9e80.jpg')"}}>
    
    
    <div className=" h-full w-full flex justify-center items-center backdrop-filter backdrop-blur-sm">
     
     <div className=" w-2/3 h-3/4 shadow-2xl rounded-md bg-gray-100 ">
      <h1 className='text-center mt-20 text-5xl font-serif mt-4 text-rose-900'>Sign In</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md  mx-auto">
      <input 
            className="border mt-4 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
            type="name" name="UserName"
            placeholder="Name:" onChange={(e)=>{setUserName(e.target.value)}} {...register('UserName', { required: "Username is required" })}
          />
          {errors.UserName && <p className='text-rose-900'>{errors.UserName.message}</p>}
    
    <input 
            className="border  mt-4 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
            type="Password"  name="Password"
            placeholder="Password:"  onChange={(e)=>{setPassword(e.target.value)}} {...register('Password', { required: "Password is required"})}
          />
  {errors.Password && <p className='text-rose-900'>{errors.Password.message}</p>}
    
    <button type="submit" className="transition mt-4 ml-28 w-36 h-10 text-white rounded-md duration-150 bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 ">
                    Sign In
                  </button>
       
     </form>
    
     </div>
    </div>
    
    
    </div>
    
      </>
  )
}

export default SignIn