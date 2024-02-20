import { useState } from 'react'
import{Route,Routes,Link} from 'react-router-dom'
import './App.css'
import './components/Home'
import Home from './components/Home'

function App() {
  

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
