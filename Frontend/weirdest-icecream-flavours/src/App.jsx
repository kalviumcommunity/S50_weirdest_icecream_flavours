import{Route,Routes} from 'react-router-dom'
import './App.css'

import Portal from "./components/Portal"
import Home from "./components/Home"
import Posts from './components/Posts'
import Topteir from './components/Topteir'
import User from './components/User'

function App() {
  

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Portal' element={<Portal/>}/>
     <Route path='/User' element={<User/>}/>
     <Route path='/Posts' element={<Posts/>}/>
     <Route path='/Topteir' element={<Topteir/>}/>

    </Routes>
  )
}

export default App
