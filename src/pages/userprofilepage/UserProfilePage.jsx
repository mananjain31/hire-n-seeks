import React, { useEffect } from 'react'
import { TextField, Button, Select, Chip, MenuItem, OutlinedInput, FormControl, InputLabel, Divider } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PurpleButton } from '../../shared/buttons/Buttons';
import Navbar from '../../shared/navbar/Navbar'
import './UserProfilePage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import SkillsInput from './SkillsInput';
import { updateData } from '../../store/actions/user-actions';
import ProjectsInput from './ProjectsInput';

const initialFormData = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    bio: "",
    skills: [],
    projects: [], // {name, description, link}
    linkGithub: "",
    linkLinkedIn: "",
    linkExtra: "",
    is_recruiter: "",
}

// pass ev as {INIT:user} to convert and inialise the user data recieved from the server
// pass ev as {LIST : { name : "projects", value : [{},{},....] } } to modify lists
const formDataReducer = (state, ev) => {
    if (ev.INIT)
        return ev.INIT;
    if (ev.LIST) {
        const { name, value } = ev.LIST;
        return {
            ...state,
            [name]: value,
        }
    }
    const { name, value } = ev.target;
    return {
        ...state,
        [name]: value,
    }
}


export const UserProfilePage = () => {

    const user = useSelector(state => state.user);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, formDataDispatch] = React.useReducer(formDataReducer, initialFormData);
    const [formErrors, setFormErrors] = React.useState(initialFormData);

    useEffect(() => {
        formDataDispatch({ "INIT": user });
    }, [user]);

    const handleSubmit = ev => { 
        ev.preventDefault();
        console.log(formData);
        dispatch(updateData(formData, function successCallback(){
            navigate("/");
        }))
    }
    console.log(user);


    return (
        <div className='User-profile-page'>
            <Navbar />
            <section className='page-section'>
                <div className='forms-wrapper'>
                    <form className='user-profile-form'>

                        <div className='form-wrapper'>

                            <div>
                                <h1>User Profile</h1>
                                {/* <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link> */}
                            </div>
                            <div className='user-profile-fields'>
                                <TextField
                                    name="userName"
                                    value={formData.userName}
                                    onChange={formDataDispatch}
                                    label="Username"
                                    variant="standard"
                                />
                                <div className='aligned-fields'>
                                    <TextField 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={formDataDispatch}
                                        label="Firstname" 
                                        variant="standard" 
                                    />
                                    <TextField 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={formDataDispatch}
                                        label="Lastname" 
                                        variant="standard" 
                                    />
                                </div>
                                <TextField 
                                    name="email"
                                    value={formData.email}
                                    onChange={formDataDispatch}
                                    label="Email" 
                                    variant="standard" 
                                    type="email" 
                                />
                                <TextField 
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={formDataDispatch}
                                    label="Contact No" 
                                    variant="standard" 
                                    type="number" 
                                />
                                <TextField 
                                    name="address"
                                    value={formData.address}
                                    onChange={formDataDispatch}
                                    label="Address" 
                                    variant="standard" 
                                    multiline 
                                />
                                <TextField 
                                    name="city"
                                    value={formData.city}
                                    onChange={formDataDispatch}
                                    label="City" 
                                    variant="standard" 
                                />
                                <TextField 
                                    name="country"
                                    value={formData.country}
                                    onChange={formDataDispatch}
                                    label="Country" 
                                    variant="standard" 
                                />
                                <TextField 
                                    name="dob"
                                    value={formData.dob}
                                    onChange={formDataDispatch}
                                    label=" " 
                                    helperText="DOB" 
                                    variant="standard" 
                                    type="date" 
                                />
                                <TextField 
                                    name="bio"
                                    value={formData.bio}
                                    onChange={formDataDispatch}
                                    label="Bio" 
                                    variant="standard" 
                                    multiline 
                                />
                                
                                <div className='aligned-fields'>
                                    <TextField 
                                        name="linkGithub"
                                        value={formData.linkGithub}
                                        onChange={formDataDispatch}
                                        label="Github Profile Link" 
                                        variant="standard" 
                                        type="url" 
                                    />
                                    <TextField 
                                        name="linkLinkedIn"
                                        value={formData.linkLinkedIn}
                                        onChange={formDataDispatch}
                                        label="Linkedin Profile Link" 
                                        variant="standard" 
                                        type="url" 
                                    />
                                </div>
                                <TextField 
                                    name="linkExtra"
                                    value={formData.linkExtra}
                                    onChange={formDataDispatch}
                                    label="Other Portfolio Links" 
                                    variant="standard" 
                                    type="url" 
                                    multiline 
                                />

                               <SkillsInput userSkills = {formData.skills} formDataDispatch={formDataDispatch} error={formErrors.skills} name="skills"/>

                               <Divider/>
                                <ProjectsInput />
                                
                            </div>
                            <div className='mt-5'>
                                <PurpleButton color="white" onClick={handleSubmit}>Update</PurpleButton>
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

