import{Route,Routes} from 'react-router-dom'
import './App.css'

import Portal from "./components/Portal"
import Home from "./components/Home"
import User from './components/User'
import Update from './components/Update'
import Add from './components/Add'
import SignIn from './components/SignIn'

function App() {
  

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Portal' element={<Portal/>}/>
     <Route path='/Add' element={<Add/>}/>
     <Route path='/User' element={<User/>}/>
     <Route path='/Update/:id' element={<Update/>}/>
     <Route path='/SignIn' element={<SignIn/>}/>
    </Routes>
  )
}

export default App
