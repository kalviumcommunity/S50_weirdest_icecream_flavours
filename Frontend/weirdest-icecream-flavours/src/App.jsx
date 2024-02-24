import{Route,Routes} from 'react-router-dom'
import './App.css'

import Portal from "./components/Portal"
import Home from "./components/Home"

function App() {
  

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>

     <Route path='/Portal' element={<Portal/>}/>

    </Routes>
  )
}

export default App
