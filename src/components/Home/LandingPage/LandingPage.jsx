import React, { useState } from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar"

const LandingPage = () => {
  // const [colr,setColr] = useState(false); 
  return (
    <div className='LandingPage' >
      <div className="hexagonP" id="hexagonP" >
          <div className="hexagon" id="hexagon" >
            <div className="hexagonChild" id="hexagonChild" >
              <div className="hexagonGrandChild" id="hexagonGrandChild">
              <div  className="hexagonGreatGrandChild" id="hexagonGreatGrandChild" >
                <div className="work" >Sponshive</div>
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
