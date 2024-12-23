import React, { useState } from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar"

const LandingPage = () => {
  // const [hexagonGreatGrandChild,setHexagonGreatGrandChild] = useState(false); 
  return (
    <div className='LandingPage' >
      <div className="hexagonP" id="hexagonP" > 
          <div className="hexagon" id="hexagon" >
            <div className="hexagonChild" id="hexagonChild" >
              <div className="hexagonGrandChild" id="hexagonGrandChild">
              <div  className="hexagonGreatGrandChild" id="hexagonGreatGrandChild">
                <div className="work" >SPONSHIVE</div>
              </div> 
              </div>
            </div>
          </div>
          </div> 

        <div className="landingPageChild">
            <Navbar />
        </div>
    </div>
  )
}

export default LandingPage
