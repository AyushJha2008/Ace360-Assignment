import profile from '/Coding/ace360_assignment/Product Viewer/src/assets/profile.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <span>Product Viewer</span>
        </div>
        <div className="navbar-right">
            <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default Navbar