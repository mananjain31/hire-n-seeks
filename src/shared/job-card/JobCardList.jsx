import { ReportGmailerrorred } from '@mui/icons-material';
import React from 'react'
import {JobCard} from './JobCard';

export const JobCardList = (props) => {
    const {jobs} = props;
    return (
        <div className='flex flex-col flex-1 gap-4'>
            {
                jobs.length ?
                jobs.map(job =>
                    <JobCard key={job.id} job = {job}/>
                )
                : <div className='bg-purple-rgba px-12 py-6 text-center text-xl items-center flex justify-center gap-1'> <ReportGmailerrorred/> No Jobs Found</div>
            }
        </div>
    )
}
