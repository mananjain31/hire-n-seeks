import React from 'react'
import { Input, TextField, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { PurpleButton } from '../../shared/buttons/Buttons';
import Navbar from '../../shared/navbar/Navbar'
import './UserProfilePage.scss'

export const UserProfilePage = () => {
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
            }
        ]
    };


    return (
        <div className='User-profile-page'>
            <Navbar navData={navData} />
            <section className='page-section'>
                <div className='forms-wrapper'>
                    <form className='user-profile-form'>

                        <div className='form-wrapper'>

                            <div>
                                <h1>User Profile</h1>
                                {/* <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link> */}
                            </div>
                            <div className='user-profile-fields'>
                                <TextField label="Username" variant="standard" />
                                <div className='aligned-fields'>
                                    <TextField label="Firstname" variant="standard" />
                                    <TextField label="Lastname" variant="standard" />
                                </div>
                                <TextField label="Email" variant="standard" type="email" />
                                <TextField label="Contact No" variant="standard" type="number" />
                                <TextField label="Address" variant="standard" />
                                <TextField label="City" variant="standard" />
                                <TextField label="Country" variant="standard" />
                                <TextField label="Bio" variant="standard" />
                                <div className='aligned-fields'>
                                    <TextField label="Github Profile Link" variant="standard" type="url" />
                                    <TextField label="Linkedin Profile Link" variant="standard" type="url" />
                                </div>
                                <TextField label="Other Portfolio Links" variant="standard" type="url" />
                                <TextField label=" " helperText="DOB" variant="standard" type="date" />
                            </div>
                            <div>
                                <PurpleButton color="white">Update</PurpleButton>
                            </div>
                        </div>
                    </form>
                    {/* <form className='user-profile-picture'>
                        <div>
                            <h1>Profile Picture</h1>
                            <h6>Upload your profile here</h6>
                        </div>
                        <input type=''></input>
                        <button>User History</button>

                    </form> */}

                </div>

            </section>

        </div>
    )
}

