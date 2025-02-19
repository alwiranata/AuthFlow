import { Routes ,Route } from 'react-router'
import Home from './Pages/Home'
import Register from './Pages/Register'

function App() {
  return (
    <div style={{textAlign : 'center'}}>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path ="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
