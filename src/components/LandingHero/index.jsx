import React from 'react'
import './LandingHero.scss'

const LandingHero = ({innerRef}) => {
  return (
    <div ref={innerRef} className='landing-hero'>Landing Hero</div>
  )
}

export default LandingHero