import React from 'react'
import {Link} from 'react-router-dom'

import LoginRegisterPageWrapper from './LoginRegisterPageWrapper';
import bloggingSVG from '../../assets/blogging.svg'
import { Input, TextField, Button } from '@mui/material';
import { PurpleButton } from '../../shared/buttons/Buttons';


export const RegisterPage = () => {
  

  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form>

        <div>
          <h1>Create Account</h1>
          <span className='gray'>Already Registered ?</span> <Link to='/login'>Login</Link>
        </div>
        
        <TextField label="Name" variant="filled"/>
        <TextField label="Email" variant="filled"/>
        <TextField label="Contact Number" variant="filled"/>
        <TextField label="Password" variant="filled" type="password"/>

        <PurpleButton color="white">Register</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}