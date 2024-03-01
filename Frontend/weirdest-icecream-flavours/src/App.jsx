import{Route,Routes} from 'react-router-dom'
import './App.css'

import Portal from "./components/Portal"
import Home from "./components/Home"
import Posts from './components/Posts'
import Topteir from './components/Topteir'
import User from './components/User'
import Update from './components/Update'
import Add from './components/Add'

function App() {
  

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Portal' element={<Portal/>}/>
     <Route path='/Add' element={<Add/>}/>
     <Route path='/User' element={<User/>}/>
     <Route path='/Update/:id' element={<Update/>}/>
     <Route path='/Posts' element={<Posts/>}/>
     <Route path='/Topteir' element={<Topteir/>}/>

    </Routes>
  )
}

export default App
