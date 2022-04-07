import React from 'react'
import {JobCard} from './JobCard';

export const JobCardList = (props) => {
    const {jobs} = props;
    return (
        <div className='flex flex-col flex-1 gap-4'>
            {
                jobs.map(job =>
                    <JobCard/>
                )
            }
        </div>
    )
}
