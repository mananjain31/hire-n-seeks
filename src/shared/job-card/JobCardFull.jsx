import { ArrowForwardIos, CalendarToday, Category, CoPresent, Error, LocationOn, WorkOutline } from '@mui/icons-material'
import { Chip, Divider } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { applyJob } from '../../store/actions/jobs-actions';
import getDateString from '../../utils/getDateString';

export const JobCardFull = ({job}) => {
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

  
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  // when job not found
  if(!job.title) return <div className='ml-auto mr-auto'>
    <h1 className='text-2xl text-red-400 font-bold flex items-center gap-2'>
      <Error/>
      Invalid Job ID {job.title}
    </h1>
  </div>


  const handleApplyClick = ev => {
    dispatch(applyJob(id));
  }

  const alreadyApplied = appliedPeople && appliedPeople.includes("" + user.id);
  const applyBtnLabel = !alreadyApplied ? "Apply Now" : "Applied";

  let jobPostedDate = getDateString(new Date(jobDate));
  const trimmedDesc = desc.length > 200 ? desc.substring(0, 200) + "..." : desc;
  
  return (
    <div className='bg-purple-rgba px-12 py-6 flex flex-col text-left gap-3'>

        <h2 className='text-lg text-primary text-left'> Job Title </h2>
        <p>{title}</p>

        <Divider/>

        <h2 className='text-lg text-primary text-left'> Posted By </h2>
        <p>{postedBy}</p>

        <Divider/>
        <h2 className='text-lg text-primary text-left'> Job Role </h2>
        <p>{jobPos}</p>

        <Divider/>

        <h2 className='text-lg text-primary text-left'> Job Description </h2>
        <p>{desc}</p>

        <Divider/>

        <h2 className='text-lg text-primary text-left'> Job Requirements </h2>
        <span className='flex gap-1 flex-wrap'>
            {
                reqSkill?.map(skill => <Chip className="text-white"  key={skill+id}  label={skill}/>)
            }
        </span>

        <Divider/>

        <h2 className='text-lg text-primary text-left'> Location </h2>
        <p>{location}</p>

        <Divider/>

        <h2 className='text-lg text-primary text-left'> Experience Required </h2>
        <p>{expLevel} Years</p>

        <Divider/>
        

        <h2 className='text-lg text-primary text-left'> Total Applications Recieved: {appliedPeople && appliedPeople.length > 0 ? appliedPeople.length : '0'} </h2>

        {
          user.is_recruiter && <Link className='cursor-pointer underline' to={"/viewapplications/"+id}>Click to View Applications</Link>
        }

    </div>  
  )

}