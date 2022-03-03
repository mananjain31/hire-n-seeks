import { ArrowRightAlt } from '@mui/icons-material'
import React from 'react'
import { PrimaryButton } from '../buttons/Buttons'
import CardSlider from '../card-slider/CardSlider'
import JobCard from '../job-card/JobCard'
import './ExploreJobs.scss'

const ExploreJobs = () => {
  const cardsProps = [{}, {},{}, {},{}, {}];
  return (
    <section className='explore-jobs page-section'>
      <h2 className='explore-jobs-headline'>Introducing <br/> Fresher Jobs</h2>
      <CardSlider CardComponent = {JobCard} cardsProps={cardsProps} />
      
      <div className='explore-btn'>
        <PrimaryButton bg="black" color="white">Explore <ArrowRightAlt/></PrimaryButton>
      </div>

    </section>
  )
}

export default ExploreJobs