import React, { useState } from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar"
import Card from '../../Card/Card'

const LandingPage = () => {
  const [work2,setWork2] = useState(false); 
  return (
    <div className='LandingPage' >
      <div className="hexagonP" id="hexagonP" > 
          <div className="hexagon" id="hexagon" >
            <div className="hexagonChild" id="hexagonChild" >
              <div className="hexagonGrandChild" id="hexagonGrandChild">
              <div  className="hexagonGreatGrandChild" id="hexagonGreatGrandChild">
                <div className={`work ${(work2==true) ? " work2" : "" }`} 
                onMouseEnter={()=>{
                  setWork2(true); 
                }}
                 
                onMouseLeave={()=>{
                  setWork2(false);
                }}
                >SPONSHIVE</div>
              </div> 
              </div> 
            </div>
          </div>
          </div> 

        <Card card={"card1"}/>
        <Card card={"card2"}/>
        <Card card={"card3"}/>  
        <div className="landingPageChild">   
            <Navbar />
        </div> 
    </div>
  )
}

export default LandingPage
