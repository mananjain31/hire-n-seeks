import { AccessTime, CalendarToday, Category, CoPresent, LocalPostOffice, LocationOn, WorkOutline } from '@mui/icons-material'
import { Chip } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applyJob } from '../../store/actions/jobs-actions';
import getDateString from '../../utils/getDateString';
import { PrimaryButton } from '../buttons/Buttons'

export const JobCard = ({job}) => {
  const {
    fullPage, // for /job/:slug page to get full detailed view of the job
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

  let jobPostedDate = getDateString(new Date(jobDate));
  const trimmedDesc = desc.length > 100 ? desc.substring(0, 300) + "..." : desc;
  
  const cardContent = (
    <div className='bg-purple-rgba px-12 py-6 flex'>
      <div className='flex flex-col gap-4 flex-1'>
        <h2 className='text-xl font-bold text-left'>{title}</h2>
        <div className='flex flex-col items-start gap-2'>
            <span className='flex gap-1 items-center'> <CalendarToday/> <span>Posted on { jobPostedDate }</span></span> 
            <span className='flex gap-1 items-center'> <WorkOutline/> 
            <span>
              {jobPos}
            </span>
            </span>
            <span className='flex gap-1 items-center'> <Category/> 
            <span>
              {
                reqSkill?.map(skill => <Chip className="text-white"  key={skill+id}  label={skill}/>)
              }
            </span>
              </span>
            <span className='flex gap-1 items-center'> <LocationOn/> <span>{location}</span></span> 
            <span className='flex gap-1 items-center'> <CoPresent/> <span>{expLevel} Years experience </span></span>
            {/* <span> <AccessTime/> {timing}</span>  */}
        </div>
        <div className='flex gap-2'>
          <button 
            disabled={alreadyApplied}
            onClick={handleApplyClick}
            className={
              `rounded 
              ${alreadyApplied ? "bg-slate-800" : "bg-primary"} text-white px-3 py-2 
              ${alreadyApplied ? "hover:bg-slate-500" : "hover:bg-primary-light"}
              transition-all`
            } 
          >
              {applyBtnLabel}
          </button>
          <button className='rounded text-primary outline px-3 py-2 hover:bg-white transition-all' >
              More Info
        </button>
        </div>
      </div>

      <div className='flex-1 lg:block hidden'>
        <h2 className='text-lg text-primary text-left'> {jobPos} </h2>
        <p className='text-left text-gray-700'>{trimmedDesc}</p>
      </div>

    </div>  
  )

  return !fullPage ? cardContent : cardContent;
}