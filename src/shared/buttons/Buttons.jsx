import React from 'react'
import {Button} from '@mui/material'
import './Buttons.scss'

import { useNavigate} from 'react-router-dom'
import { logoutUser } from '../../store/actions/user-actions'
import { useDispatch, useSelector } from 'react-redux'

export const LoginSignupLogoutButton = (props) => {


  const { loggedIn } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const buttonText = loggedIn ? 'Logout' : 'New User/Login';
  
  const handleClick = () => {    
    console.log(loggedIn);
    if(!loggedIn) navigate('/login')
    else dispatch(logoutUser());
  }

  return (
    <Button {...props} variant="outlined" className="login-signup-logout-button" onClick={handleClick}> 
      {buttonText}
    </Button>
  )
}


export const PrimaryButton = (props) => {
  return (
    <span style={{background : props.bg || 'inherit', color : props.color || 'inherit'}}>
      <button {...props} className="primary-button"/>
    </span>
  )
}

export const PurpleButton = (props) => {
  return (
    <span style={{color : props.color || 'inherit'}}>
      <button {...props} className="purple-button"/>
    </span>
  )
}


// export const useLoginSignupLogoutButton = props1=> {
  //   return props2=><LoginSignupLogoutButton {...props1} {...props2}/>
// 