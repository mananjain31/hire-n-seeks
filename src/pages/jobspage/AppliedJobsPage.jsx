import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/explore-jobs/ExploreJobCard'
import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import { loadJobs } from '../../store/actions/jobs-actions';
import Filters, { FiltersForMobile } from './Filters';

import './JobsPage.scss'

export const AppliedJobsPage = () => {

  const dispatch = useDispatch();
  
  const jobs = useSelector(state => state.jobs)
  const user = useSelector(state => state.user)
  const state = useSelector(state => state);
    
    React.useEffect(()=>{
        dispatch(loadJobs());
    }, [])

  return (
    <div className='jobs-page'>
    <Navbar />

    <section className='page-section jobs-page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Jobs Applied By You</h1>
        </header>
        {/* <FiltersForMobile/> */}
        <main>
          
          {/* <div className="desktop-only">
            <Filters/>
          </div> */}
          <JobCardList jobs={
                jobs?.jobList.filter(job => {
                    return job.appliedPeople.includes(""+user.id);
                }) || []
            }/>
        </main>
    </section>
    </div>
  )
}
