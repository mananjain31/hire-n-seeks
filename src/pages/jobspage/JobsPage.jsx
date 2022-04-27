import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/explore-jobs/ExploreJobCard'
import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import { loadJobs } from '../../store/actions/jobs-actions';
import Filters, { FiltersForMobile } from './Filters';

import './JobsPage.scss'


const initialfilters = {
  location: '',
  skills: [],
}

// pass ev as {INIT:user} to convert and inialise the user data recieved from the server
// pass ev as {LIST : { name : "projects", value : [{},{},....] } } to modify lists
const filtersReducer = (state, ev) => {
  if (ev.INIT)
      return ev.INIT;
  if (ev.LIST) {
      const { name, value } = ev.LIST;
      return {
          ...state,
          [name]: value,
      }
  }
  const { name, value } = ev.target;
  return {
      ...state,
      [name]: value,
  }
}

export const JobsPage = () => {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs)
  React.useEffect(()=>{
    dispatch(loadJobs());
  }, [])

  const [filters, filtersDispatch] = React.useReducer(filtersReducer, initialfilters);
  const clearFilters = ev => {
    filtersDispatch({
      "INIT" : initialfilters
    })
  }

  // console.log(filters.location, filters.location.length, filters.skills.length);
  // console.log(jobs);
  const filteredJobs = jobs?.jobList?.filter(job => {
      let returnval = true;

      if(filters.location.length) 
        returnval = returnval && job.location.toLowerCase().includes(filters.location.toLowerCase());
      if(filters.skills.length) 
        returnval = returnval && job.reqSkill.some(skill => filters.skills.includes(skill))
      return returnval;
  }) || [];

  // console.log(shouldApplyFilter);
  // console.log(filteredJobs);

  return (
    <div className='jobs-page'>
    <Navbar />

    <section className='page-section jobs-page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Jobs for freshers and remote Jobs</h1>
        </header>
        <FiltersForMobile filters={filters} filtersDispatch={filtersDispatch} clearFilters={clearFilters}/>
        <main>
          
          <div className="desktop-only">
            <Filters filters={filters} filtersDispatch={filtersDispatch} clearFilters={clearFilters}/>
          </div>

          <JobCardList jobs={filteredJobs}/>
        </main>
    </section>
    </div>
  )
}
