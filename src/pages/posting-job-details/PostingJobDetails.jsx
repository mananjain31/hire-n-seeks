import React from 'react'
import { Input, TextField, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { PurpleButton } from '../../shared/buttons/Buttons';
import Navbar from '../../shared/navbar/Navbar'
import './PostingJobDetails.scss'

export const PostingJobDetails = () => {
    const { pathname, hash } = useLocation();

    const navData = {
        active: pathname + hash,
        navlinks: [
            {
                to: '/',
                label: 'Jobs'
            },
            {
                to: '/',
                label: 'Applied Jobs'
            },
            {
                to: '/',
                label: 'Posted Jobs'
            },
            {
                to: '/',
                label: 'User Profile'
            },
            {
                to: '/',
                label: 'Job Details'
            }
        ]
    };


    return (
        <div className='posting-job-detail-page'>
            <Navbar navData={navData} />
            <section className='page-section'>
                <div className='forms-wrapper'>
                    <form className='job-detail-form'>

                        <div className='form-wrapper'>

                            <div>
                                <h1>Job Details</h1>
                                {/* <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link> */}
                            </div>
                            <div className='job-detail-fields'>
                                <TextField label="Title" variant="standard" /> 
                                
                                <TextField label="Position" variant="standard"/>
                                
                                <TextField label="Description" variant="standard" />
                                <TextField label="Working Hours" variant="standard" type="number"/>
                                <TextField label="Required Skills" variant="standard" />
                                <TextField label="Experience Level" variant="standard" type="number"/>
                                
                                <TextField label="Location" variant="standard"/>
                               
                            </div>
                            <div className='btn'>
                                <PurpleButton color="white">Post</PurpleButton>
                            </div>
                        </div>
                    </form>

                </div>

            </section>

        </div>
    )
}

