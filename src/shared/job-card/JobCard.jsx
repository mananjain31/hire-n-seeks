import { ArrowRightAlt } from '@mui/icons-material';
import React from 'react'

import './JobCard.scss';

const JobCard = () => {
  return (
    <div className='job-card'>

      <div className="card-left">
        <h2 className='job-title'>Google Hiring <br/> Interns Winter <br/> 2021</h2>
      </div>
      
      

      <div className="card-right">
        <ArrowRightAlt/> <span>Posted on 2021-11-21</span> <br/>
        <ArrowRightAlt/> <span>Internship</span> <br/>
        <ArrowRightAlt/> <span>Indore(M.P.), India</span> <br/>
        <ArrowRightAlt/> <span>January 2022 - December 2022</span> <br/>
      </div>

    </div>
  )
}

export default JobCard