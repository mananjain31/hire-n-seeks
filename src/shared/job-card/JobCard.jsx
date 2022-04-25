import { AccessTime, CalendarToday, CoPresent, LocalPostOffice, LocationOn, WorkOutline } from '@mui/icons-material'
import { Chip } from '@mui/material';
import React from 'react'
import { PrimaryButton } from '../buttons/Buttons'

export const JobCard = ({job}) => {
  const {
        id,
        jobDate, //
        title, // 
        jobPos,
        desc,
        timing,
        reqSkill,
        expLevel,
        postedBy,
        location,
        appliedPeople,
    } = job;
  return (
    <div className='bg-purple-rgba px-12 py-6 flex flex-col gap-4 items-start'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <div className='flex flex-col items-start gap-1'>
             <span> <CalendarToday/> Posted on { (new Date(jobDate)).toUTCString()	 }</span> 
             <span> <WorkOutline/> {
               reqSkill?.map(skill => <Chip className="text-white"  key={skill+id}  label={skill}/>)
             }</span>
             <span> <LocationOn/> {location}</span> 
             <span> <CoPresent/> {expLevel} Years of experience required</span>
             {/* <span> <AccessTime/> {timing}</span>  */}
        </div>

        <button className='rounded bg-blue-800 text-white px-3 py-2 hover:bg-blue-700 transition-all' >
            Apply Now
       </button>

    </div>  
    )
}