import React from 'react'
import './home.css'
import fabric from "../../assets/fabric.png"
import LandingPage from './LandingPage/LandingPage'

const Home = () => {
  return (
    <div className='home'> 
    <LandingPage/>  
    <img src={fabric} alt=""/>
    </div>
  )  
} 

export default Home