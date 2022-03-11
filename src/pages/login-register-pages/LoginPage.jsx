import React from 'react'
import {Link} from 'react-router-dom'

import LoginRegisterPageWrapper from './LoginRegisterPageWrapper';
import bloggingSVG from '../../assets/blogging.svg'
import { Input, TextField, Button } from '@mui/material';
import { PurpleButton } from '../../shared/buttons/Buttons';


export const LoginPage = () => {
  

  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form>

        <div>
          <h1>Login</h1>
          <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link>
        </div>
        
        <TextField label="Username / Email / Contact Number" variant="filled"/>
        <TextField label="Password" variant="filled" type="password"/>

        <PurpleButton color="white">Login</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}