import React from 'react'
import { Input, TextField, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PurpleButton } from '../../shared/buttons/Buttons';
import Navbar from '../../shared/navbar/Navbar'
import './PostingJobDetails.scss'
import { useDispatch, useSelector } from 'react-redux';
import SkillsInput from '../userprofilepage/SkillsInput';
import { postJob } from '../../store/actions/jobs-actions';

const initialFormData = {
    title : "", 
    jobPos : "", 
    desc : "", 
    reqSkill : "",
    expLevel : "",
    location : "",
    timing : "",
    jobDate : "",
    appliedPeople : "",
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

export const PostingJobDetails = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useSelector(state => state.alert);
    const user = useSelector(state => state.user);
    const [formData, formDataDispatch] = React.useReducer(formDataReducer, initialFormData);
    const [formErrors, setFormErrors] = React.useState(initialFormData);

    const handleSubmit = ev => { 
        ev.preventDefault();
        console.log(formData);
        dispatch(postJob(formData, function successCallback(){
            navigate("/");
        })); // continue here
    }

    return (
        <div className='posting-job-detail-page'>
            <Navbar/>
            <section className='page-section'>
                <div className='forms-wrapper'>
                    <form className='job-detail-form'>

                        <div className='form-wrapper'>

                            <div>
                                <h1>Job Details</h1>
                                {/* <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link> */}
                            </div>
                            <div className='job-detail-fields'>
                                <TextField name="title" onChange={formDataDispatch} label="Title" variant="standard" /> 
                                
                                <TextField name="jobPos" onChange={formDataDispatch} label="Position" variant="standard"/>
                                
                                <TextField name="timing" onChange={formDataDispatch} label="Working Hours" variant="standard" type="number"/>
                                <TextField name="expLevel" onChange={formDataDispatch} label="Experience Level" variant="standard" type="number"/>
                                
                                <TextField name="location" onChange={formDataDispatch} label="Location" variant="standard"/>

                                <SkillsInput userSkills = {formData.reqSkill} formDataDispatch={formDataDispatch} error={formErrors.skills} name="reqSkill" />

                                <TextField name="desc" onChange={formDataDispatch} label="Description" variant="outlined" multiline rows={3}/>

                            </div>
                            <div className='btn'>
                                <PurpleButton onClick={handleSubmit} color="white">Post</PurpleButton>
                            </div>
                        </div>
                    </form>

                </div>

            </section>

        </div>
    )
}

