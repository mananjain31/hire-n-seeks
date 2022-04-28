import { Chip, LinearProgress } from '@mui/material';
import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { JobCard } from '../../shared/job-card/JobCard';
import Navbar from '../../shared/navbar/Navbar';
import UserPortfolioCard from '../../shared/user-portfolio-card/UserPortfolioCard';
import arrayFromString from '../../utils/arrayFromString';

import "./JobsPage.scss"

export const ViewApplicationsPage = () => {

  const { jobId } = useParams();
  const [loading,setLoading] = React.useState(true);
  const [applications,setApplications] = React.useState([]);
  const [job,setJob] = React.useState(null);

  React.useEffect(()=>{
    fetch("/job/"+jobId).then(resp => resp.json()).then(({data : job}) => 
      setJob(()=> ({
          ...job,
          appliedPeople: job.appliedPeople.split(" ").filter(x=>x.length),
          reqSkill : arrayFromString(job.reqSkill)
        })
      ))
      
      fetch("/applications/"+jobId).then(resp => resp.json()).then(data => {
        setApplications(data);
        setLoading(false);
      }
      )

    
  }, [])


  return (
    <div className='jobs-page'>
    <Navbar />
      <section className='page-section'>    
        <header>
          <h1 className='text-3xl font-bold'>Applications recieved for the Job : {jobId}</h1>
            {
              job && <JobCard job={job}/>
            }
            {
              loading && <LinearProgress/>
            }
            {
              !loading && applications.length === 0 && <h1>No Applications Recieved</h1>
            }
            {
              !loading && applications.length > 0 && 
              <div className='flex mt-2 gap-4 flex-wrap bg-purple-rgba px-12 py-4'>
                {
                  applications.map(user => 
                    <Link to={"/userportfolio/"+user.userName} 
                      className="cursor-pointer underline text-primary rounded-lg "
                    >
                    
                      {user.userName}
                    </Link>
                  )
                }
                </div>
            }
          {/* 
            {
              !loading && applications.length > 0 && 
              <div className='flex mt-10 gap-4 flex-wrap justify-center items-center'>
                {
                  applications.map(user =>
                    <UserPortfolioCard user={{
                      ...user,
                      skills: arrayFromString(user.skills)
                    }} />
                  )
                }
              </div>
            }
          */}
        </header>
      </section>
    </div>
  )
}
