import React from 'react'
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/explore-jobs/ExploreJobCard'
import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import Filters from './Filters';

import './JobsPage.scss'

export const JobsPage = () => {

    const {pathname, hash} = useLocation();
    
    const navData = {
        active : pathname+hash,
        navlinks : [
            
        ]
    };

  return (
    <div className='jobs-page'>
    <Navbar navData = {navData} />

    <section className='page-section jobs-page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Jobs for freshers and remote Jobs</h1>
        </header>  
        <main>
          <Filters/>
          <JobCardList jobs={[{},{},{}]}/>
        </main>
    </section>
    </div>
  )
}
