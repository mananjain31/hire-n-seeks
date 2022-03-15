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


export const LoginPage = () => {

  const user = useSelector(state=>state);
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const userId = formData.get('userId');
    const password = formData.get('password');
    console.log(userId, password);
  }
  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form onSubmit={handleSubmit}>

        <div>
          <h1>Login</h1>
          <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link>
        </div>
        
        <TextField label="Username / Email / Contact Number" variant="filled" name="userId"/>
        <TextField label="Password" variant="filled" type="password" name="password"/>

        <PurpleButton color="white">Login</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}