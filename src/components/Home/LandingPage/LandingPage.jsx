import React from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar" 

const LandingPage = () => {
  return (
    <div className='LandingPage'> 
          <div className="hexagon" id="hexagon" >
            <div className="hexagonChild" id="hexagon" ></div>
            </div> 
        <div className="landingPageChild">
            <Navbar />
        </div>
    </div>
  )
}

export default LandingPage
