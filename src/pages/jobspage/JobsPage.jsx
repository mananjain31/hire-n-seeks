import React from 'react'
import { useLocation } from 'react-router-dom';

import { JobCard } from '../../shared/job-card/JobCard'
import Navbar from '../../shared/navbar/Navbar';

import './JobsPage.scss'

export const JobsPage = () => {

    const {pathname, hash} = useLocation();
    
    const navData = {
        active : pathname+hash,
        navlinks : [
            {
            to : '/',
            label : 'Home'
            }
        ]
    };

  return (
    <>
    <div className='page-section'>      

        <Navbar navData = {navData} />
        <JobCard/>

    </div>
    </>
  )
}
