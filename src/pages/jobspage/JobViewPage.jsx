import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { JobCard } from '../../shared/job-card/JobCard';
import { JobCardFull } from '../../shared/job-card/JobCardFull';

import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import { loadJobs } from '../../store/actions/jobs-actions';
import Filters, { FiltersForMobile } from './Filters';

import './JobsPage.scss'

export const JobViewPage = (props) => {
  const { jobId } = useParams();
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
          <h1 className='text-3xl font-bold'>Job Description</h1>
        </header>
        {/* <FiltersForMobile/> */}
        <main className='flex flex-col gap-1'>
            <JobCard job={jobs?.jobList.find(job => job.id == jobId) || {}}/>
            <JobCardFull job={jobs?.jobList.find(job => job.id == jobId) || {}}/>
        </main>
    </section>
    </div>
  )
}
