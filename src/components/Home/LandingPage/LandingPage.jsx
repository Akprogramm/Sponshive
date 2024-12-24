import React, { useState } from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar"
import Card from '../../Card/Card'
import HiddenCards from '../../HiddenCards/HiddenCards.jsx'
import { useSelector,useDispatch } from 'react-redux';
import {clickWorkHandler} from '../../../features/Todo/TodoSlice.jsx'

const LandingPage = () => {
  const [work2,setWork2] = useState(false); 
  const dispatch = useDispatch();

  const handleCardsShow = () => {
    dispatch(clickWorkHandler());
  }

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
                onClick={handleCardsShow}
                >SPONSHIVE</div>
              </div> 
              </div> 
            </div>
          </div>
          </div> 

        <HiddenCards /> 
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
