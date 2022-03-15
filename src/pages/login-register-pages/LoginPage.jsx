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

  console.log(user);
  console.log(formData);

  const handleSubmit = ev => {
    ev.preventDefault();
    // validationn code
    // ******
    // validationn code ends
    // const formData = new FormData(ev.target);
    // const userId = formData.get('userId');
    // const password = formData.get('password');
    // console.log(userId, password);
    
    dispatch(loginUser({userName : formData.userId, password : formData.password}));
  }
  return (
    <LoginRegisterPageWrapper sideImage={bloggingSVG}>
      <form onSubmit={handleSubmit}>

        <div>
          <h1>Login</h1>
          <span className='gray'>New To Hire N Seeks ?</span> <Link to='/register'>Register</Link>
        </div>
        
        <TextField 
          label="Username / Email / Contact Number" 
          variant="filled" 
          name="userId"
          value={formData.userId}
          onChange={formDataDispatch}
        />
        <TextField 
          label="Password" 
          variant="filled" 
          type="password" 
          name="password"
          value={formData.password}
          onChange={formDataDispatch}
        />

        <PurpleButton color="white">Login</PurpleButton>
        
      </form>
    </LoginRegisterPageWrapper>
  )
}