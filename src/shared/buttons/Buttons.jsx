import React from 'react'
import {Button} from '@mui/material'

import './Buttons.scss'

export const LoginSignupButton = (props) => {
  return (
    <Button {...props} variant="outlined" className="login-signup-button"/>
  )
}


export const PrimaryButton = (props) => {
  return (
    <span style={{background : props.bg || 'inherit', color : props.color || 'inherit'}}>
      <button {...props} className="primary-button"/>
    </span>
  )
}


// export const useLoginSignupButton = props1=> {
//   return props2=><LoginSignupButton {...props1} {...props2}/>
// 