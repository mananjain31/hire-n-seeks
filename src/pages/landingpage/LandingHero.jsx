import React from 'react'
import './LandingHero.scss'
import bloggingSVG from '../../assets/blogging.svg'
import { PrimaryButton } from '../../shared/buttons/Buttons'
import {ArrowRightAlt} from '@mui/icons-material'

const LandingHero = () => {
  return (
    <section className='landing-hero page-section'>

      <div className='hero'>
        <div className='hero-left'>
          <img className='' src={bloggingSVG} />
        </div>
        <div className='hero-right'>
            <h1>HIRE N SEEKS</h1>
            <h2>CAREER STARTER JOBS</h2>
            <div className='join-now-btn'>
              <PrimaryButton bg="black" color="white">Join Now <ArrowRightAlt/></PrimaryButton>
            </div>
        </div>
      </div>

    </section>
  )
}

export default LandingHero