import { CalendarToday, WorkOutline, LocationOn, AccessTime } from '@mui/icons-material';
import React from 'react'

import './ExploreJobCard.scss';

export const ExploreJobCard = () => {
  return (
    <div className='job-card'>

      <div className="card-left">
        <h2 className='job-title'>Google Hiring <br/> Interns Winter <br/> 2021</h2>
      </div>
      
      

      <div className="card-right">
        <CalendarToday/> <span>Posted on 2021-11-21</span> <br/>
        <WorkOutline/> <span>Internship</span> <br/>
        <LocationOn/> <span>Indore(M.P.), India</span> <br/>
        <AccessTime/> <span>January 2022 - December 2022</span> <br/>
      </div>

    </div>
  )
}

export default ExploreJobCard