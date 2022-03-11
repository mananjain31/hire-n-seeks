import React from 'react'
import {Button} from '@mui/material'

import './Buttons.scss'
import { useNavigate } from 'react-router-dom'

export const LoginSignupButton = (props) => {
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate('/login');
  }
  return (
    <Button {...props} variant="outlined" className="login-signup-button" onClick={navigateToLoginPage}/>
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


// export const useLoginSignupButton = props1=> {
//   return props2=><LoginSignupButton {...props1} {...props2}/>
// 