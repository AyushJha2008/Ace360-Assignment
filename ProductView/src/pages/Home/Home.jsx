import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Grid from '../../components/Grid/Grid'
import { useState } from 'react'

// import './home.css'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='home'>
        <Navbar setSearchTerm={setSearchTerm}/> //passing props
        <Grid searchTerm={searchTerm}/>
    </div>
  )
}

export default Home