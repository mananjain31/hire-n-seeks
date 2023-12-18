import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

import LoginRegisterPageWrapper from './LoginRegisterPageWrapper';
import bloggingSVG from '../../assets/blogging.svg'
import { TextField } from '@mui/material';
import { PurpleButton } from '../../shared/buttons/Buttons';
import { useDispatch } from 'react-redux';
import validateRegisterForm from '../../validations/validateRegisterForm';
import { registerUser } from '../../store/actions/user-actions';

const formDataReducer = (state, ev) => {
  const {name, value} = ev.target;
  return {
    ...state,
    [name] : value,
  }
}

const initialFormValues = {
  userName : '',
  email : '',
  contactNumber : '',
  password : '',
  confirmPassword : '',
  firstName : '',
  lastName : '',
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, formDataDispatch] = React.useReducer(formDataReducer,   initialFormValues);
  const [formErrors, setFormErrors] = React.useState(initialFormValues);

  // console.log(formData);

  const handleSubmit = ev => {
    ev.preventDefault();
    // console.log(formData);
    const {isValid, errors, data} = validateRegisterForm(formData);
    // console.log({isValid, errors, data});

    if(!isValid) return setFormErrors(errors);
    setFormErrors({});  
    dispatch(registerUser(data))
    .then(success => success === true ? navigate('/login') : null);
  }

  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form>

        <div>
          <h1>Create Account</h1>
          <span className='gray'>Already Registered ?</span> <Link to='/login'>Login</Link>
        </div>
        
        <TextField 
            label="A Unique Username"
            variant="filled"
            name="userName"
            value={formData.userName}
            onChange={formDataDispatch} 
            required
            error={!!formErrors.userName}
            helperText={formErrors.userName}
        />
        <div style={{display:'flex', gap : '1rem'}}>
          <TextField 
            label="First Name" 
            variant="filled"
            name="firstName"
            value={formData.firstName}
            onChange={formDataDispatch} 
            required
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
          />
          <TextField 
            label="Last Name" 
            variant="filled"
            name="lastName"
            value={formData.lastName}
            onChange={formDataDispatch} 
            required
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
          />
        </div>
        <TextField 
          label="Email" 
          variant="filled"
          type="email"
          name="email"
          value={formData.email}
          onChange={formDataDispatch} 
          required
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField 
          label="Contact Number"
          type="number"
           variant="filled"
           name="contactNumber"
           value={formData.contactNumber}
           onChange={formDataDispatch} 
           required
           error={!!formErrors.contactNumber}
           helperText={formErrors.contactNumber}
        />
        
        <div style={{display:'flex', gap : '1rem'}}>
          <TextField 
            label="Password" 
            variant="filled" 
            type="password"
            name="password"
            value={formData.password}
            onChange={formDataDispatch} 
            required
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <TextField 
            label="Confirm Password"
            variant="filled" 
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={formDataDispatch}
            required
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
          />
        </div>

        <PurpleButton type="button" onClick={handleSubmit} color="white">Register</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}