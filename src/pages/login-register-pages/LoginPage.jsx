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

  console.log(user);
  const [name, setname] = React.useState("");
  const [password, setpassword] = React.useState("");
  const handleSubmit = ev => {
    // just for testing, will implement this function fully once its done testing redux
    ev.preventDefault();
    dispatch(loginUser({userName : name, password}));
  }
  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form onSubmit={handleSubmit}>

        <div>
          <h1>Login</h1>
          <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link>
        </div>
        
        <TextField label="Username / Email / Contact Number" variant="filled" value={name} onChange={ev=>setname(ev.target.value)}/>
        <TextField label="Password" variant="filled" type="password" value={password} onChange={ev=>setpassword(ev.target.value)}/>

        <PurpleButton color="white">Login</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}