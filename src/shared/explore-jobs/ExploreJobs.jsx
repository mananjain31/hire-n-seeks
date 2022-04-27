import { ArrowRightAlt } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../buttons/Buttons'
import CardSlider from '../card-slider/CardSlider'
import ExploreJobCard from './ExploreJobCard'
import './ExploreJobs.scss'

const ExploreJobs = () => {
  const cardsProps = [{}, {},{}, {},{}, {}];
  const navigate = useNavigate();
  return (
    <section className='explore-jobs page-section'>
      <h2 className='explore-jobs-headline'>Introducing <br/> Fresher Jobs</h2>
      <CardSlider CardComponent = {ExploreJobCard} cardsProps={cardsProps} />
      
      <div className='explore-btn'>
        <PrimaryButton onClick={()=>navigate('/register')} bg="black" color="white">Explore <ArrowRightAlt/></PrimaryButton>
      </div>

    </section>
  )
}

export default ExploreJobs