import React, { useState } from 'react'
import './login.css'
import GoogleLogin from '../../../utility/GoogleLogin'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });


  return (
    <div className='login'>
      <div className="logForm">
        <h2>{signState}</h2>
        <form>
          {signState=="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
        </form>
        <div className="form-switch">
          {signState=="Sign In"?<p>New User?? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have an account?? <span onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>
          }                 
        </div>

        <div className='googlelogin'>
          <p>OR</p>
          <p>Sign in with your Google account:</p>
          <GoogleLogin />
        </div>  
      </div>
    </div>
  )
}

export default Login