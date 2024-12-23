import React from 'react'
import "./card.css"

const Card = ({card}) => { 
  return (
    <div className={`card ${card} floating`}> 
      <h2>GLASS MORPHISM</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minima tenetur animi, tempore ducimus exercitat.</p>
      <button className='btnCard'>Button</button> 
    </div>
  )
}

export default Card 
