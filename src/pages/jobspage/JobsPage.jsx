import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/explore-jobs/ExploreJobCard'
import { JobCardList } from '../../shared/job-card/JobCardList';
import Navbar from '../../shared/navbar/Navbar';
import Filters, { FiltersForMobile } from './Filters';

import './JobsPage.scss'

export const JobsPage = () => {


    const alert = useSelector(state => state.alert);
    const user = useSelector(state => state.user);

    const {pathname, hash} = useLocation();
    
    const navData = {
        active : pathname+hash,
        navlinks : [
            {
                label : 'Jobs',
                to : '/jobs',
            },
            {
                label : 'User Profile',
                to : '/userprofile',
            }
        ]
    };
    if(user.is_recruiter) {
        navData.navlinks.push({
            label : 'Post a Job',
            to : '/postingjobdetails',
        });
    }

  return (
    <div className='jobs-page'>
    <Navbar navData = {navData} />

    <section className='page-section jobs-page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Jobs for freshers and remote Jobs</h1>
        </header>
        <FiltersForMobile/>
        <main>
          
          <div className="desktop-only">
            <Filters/>
          </div>

          <JobCardList jobs={[{},{},{}]}/>
        </main>
    </section>
    </div>
  )
}
