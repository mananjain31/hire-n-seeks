import { AccessTime, CalendarToday, CoPresent, LocalPostOffice, LocationOn, WorkOutline } from '@mui/icons-material'
import { Chip } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applyJob } from '../../store/actions/jobs-actions';
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
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleApplyClick = ev => {
    dispatch(applyJob(id));
  }

  const alreadyApplied = appliedPeople.includes(""+user.id);
  const applyBtnLabel = !alreadyApplied ? "Apply Now" : "Applied";

  return (
    <div className='bg-purple-rgba px-12 py-6 flex flex-col gap-4 items-start'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <div className='flex flex-col items-start gap-1'>
             <span> <CalendarToday/> Posted on { (new Date(jobDate)).toUTCString()	 }</span> 
             <span className='flex gap-1 items-center'> <WorkOutline/> 
              {
                reqSkill?.map(skill => <Chip className="text-white"  key={skill+id}  label={skill}/>)
              }
              </span>
             <span> <LocationOn/> {location}</span> 
             <span> <CoPresent/> {expLevel} Years of experience required</span>
             {/* <span> <AccessTime/> {timing}</span>  */}
        </div>
        <div className='flex gap-2'>
          <button 
            disabled={alreadyApplied}
            onClick={handleApplyClick}
            className={
              `rounded 
              ${alreadyApplied ? "bg-slate-800" : "bg-blue-800"} text-white px-3 py-2 
              ${alreadyApplied ? "hover:bg-slate-500" : "hover:bg-blue-700"}
              transition-all`
            } 
          >
              {applyBtnLabel}
          </button>
          <button className='rounded text-blue-800 outline px-3 py-2 hover:bg-white transition-all' >
              More Info
        </button>
        </div>

    </div>  
    )
}