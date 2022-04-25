import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/explore-jobs/ExploreJobCard'
import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import { loadJobs } from '../../store/actions/jobs-actions';
import Filters, { FiltersForMobile } from './Filters';

import './JobsPage.scss'

export const JobsPage = () => {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs)
  React.useEffect(()=>{
    dispatch(loadJobs());
  }, [])

  return (
    <div className='jobs-page'>
    <Navbar />

    <section className='page-section jobs-page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Jobs for freshers and remote Jobs</h1>
        </header>
        <FiltersForMobile/>
        <main>
          
          <div className="desktop-only">
            <Filters/>
          </div>

          <JobCardList jobs={jobs?.jobList || []}/>
        </main>
    </section>
    </div>
  )
}
