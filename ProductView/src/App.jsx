
import {Route, Routes} from 'react-router-dom'
import Home from '../../ProductView/src/pages/Home/Home'
import Login from '../../ProductView/src/pages/Login/Login'
import './App.css'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
