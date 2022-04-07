import { AccessTime, CalendarToday, LocationOn, WorkOutline } from '@mui/icons-material'
import React from 'react'
import { PrimaryButton } from '../buttons/Buttons'

export const JobCard = () => {
  return (
    <div className='bg-purple-50 px-12 py-6 flex flex-col gap-4 items-start'>
        <h2 className='text-xl font-bold'>Google Hiring  Interns Winter  2021</h2>
        <div className='flex flex-col items-start gap-1'>
             <span> <CalendarToday/> Posted on 2021-11-21</span> 
             <span> <WorkOutline/> Internship</span> 
             <span> <LocationOn/> Indore(M.P.), India</span> 
             <span> <AccessTime/> January 2022 - December 2022</span> 
        </div>

        <button className='rounded bg-blue-800 text-white px-3 py-2 hover:bg-blue-700 transition-all' >
            Apply Now
       </button>

    </div>  
    )
}