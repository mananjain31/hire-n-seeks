import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { TextField } from '@mui/material';

import LoginRegisterPageWrapper from './LoginRegisterPageWrapper';
import bloggingSVG from '../../assets/blogging.svg'
import { PurpleButton } from '../../shared/buttons/Buttons';
import {
  loginUser
} from '../../store/actions/user-actions'
import validateLoginForm from '../../validations/validateLoginForm';

const formDataReducer = (state, ev) => {
  const {name, value} = ev.target;
  return {
    ...state,
    [name] : value,
  }
}

export const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const [formData, formDataDispatch] = React.useReducer(formDataReducer, {
    userId : '',
    password : ''
  });
  const [formErrors, setFormErrors] = React.useState({
    userId : '',
    password: ''
  });

  // console.log(formData);

  const handleSubmit = ev => {
    ev.preventDefault();
    const {isValid, errors, data} = validateLoginForm(formData);
    console.log(data);
    if(!isValid) return setFormErrors(errors);
    setFormErrors({});
    dispatch(loginUser(data));
  }

  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form>

        <div>
          <h1>Login</h1>
          <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link>
        </div>
        
        <TextField 
          required
          error={!!formErrors.userId}
          helperText={formErrors.userId}
          label="Username / Email / Contact Number" 
          variant="filled" 
          name="userId"
          value={formData.userId}
          onChange={formDataDispatch}
        />
        <TextField
          required 
          error={!!formErrors.password}
          helperText={formErrors.password}
          label="Password" 
          variant="filled" 
          type="password" 
          name="password"
          value={formData.password}
          onChange={formDataDispatch}
        />

        <PurpleButton onClick={handleSubmit} color="white">Login</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}