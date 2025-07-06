
import {Route, Routes} from 'react-router-dom'
import Home from '../../ProductView/src/pages/Home/Home'
import Login from '../../ProductView/src/pages/Login/Login'
import Product from '../../ProductView/src/pages/product/Product'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
