import profile from '../../assets/profile.png'
import './navbar.css'
import {Link} from 'react-router-dom'

// searchTerm in grid.jsx
const Navbar = ({setSearchTerm}) => {

  return (
    <div className='navbar'>
        <div className="navbar-left">
            <h3>Product Viewer</h3>
        </div>

        <div className="search">
          <input className="search-input" 
          type="text" placeholder="Enter name of product"
          onChange={(e)=> setSearchTerm(e.target.value.toLowerCase())} />
        </div>


        <div className="navbar-right">
          <Link to='/login'>
            <img src={profile} alt="" />
          </Link>
        </div>
    </div>
  )
}

export default Navbar