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
      <section className='page-section flex flex-col gap-4'>    

          <h1 className='text-3xl font-bold'>Applications recieved for the Job</h1>
            {
              job && <JobCard job={job}/>
            }
            {
              loading && <LinearProgress/>
            }
            {
              !loading &&
              <div className='flex mt-5 gap-4 flex-wrap flex-col items-start bg-purple-rgba px-12 py-4'>
                {
                  applications.length > 0 ?
                  <>
                  <h3 className='flex-1'>People who have applied for this job post :</h3>
                  {
                    applications.map(user => 
                      <Link to={"/userportfolio/"+user.userName} 
                      target={"_blank"}
                      className="cursor-pointer underline text-primary rounded-lg "
                      >
                      
                        {user.userName}
                      </Link>
                    )
                  }
                    </>
                  :
                  <h2>No Applications recieved yet...</h2>
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
      </section>
    </div>
  )
}
