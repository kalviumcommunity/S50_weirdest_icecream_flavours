import React from 'react'
import '../App.css'
function Home() {
  return (
    <> 

<div className="bg-contain h-screen bg-center flex justify-center items-center"  style={{backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03ed66139840229.623729a4e9e80.jpg')"}}>


<div className=" h-full w-full flex justify-center items-center backdrop-filter backdrop-blur-sm">
 
 <div className=" w-2/3 h-3/4 shadow-2xl rounded-md bg-gray-100 ">
  <h1 className='text-center text-5xl font-serif mt-4 text-rose-900'>Weirdest Icecream Flavours </h1>
  <p className='text-center text-lg font-serif  mt-2'>Explore the weirdest ice cream flavors ever created on our website! From bizarre combinations to unexpected tastes, we've got it all. Want to discover more? Sign up today!</p>
  <div className="max-w-md  mx-auto">
  <input 
        className="border mt-4 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="text"
        placeholder="Name:"
      />

<input 
        className="border mt-4 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="text"
        placeholder="E-mail:"
      />



<input 
        className="border mt-4 border-gray-300 rounded-md px-4 py-2 w-5/6 focus:outline-none focus:border-rose-900"
        type="text"
        placeholder="Password:"
      />
      <br />

<button class="transition mt-4 ml-28 w-36 h-10 text-white rounded-md duration-150 bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 ">
  Sign Up
</button>
 </div>

 
 </div>
</div>


</div>

  </>
  )
}

export default Home
