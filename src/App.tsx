import { Routes ,Route } from 'react-router'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import './App.css'
function App() {
  return (
    <div style={{textAlign : 'center'}}>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path='/login' element= {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
