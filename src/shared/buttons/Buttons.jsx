import React from 'react'
import {Button} from '@mui/material'

import './Buttons.scss'

export const LoginSignupButton = (props) => {
  return (
    <Button {...props} variant="outlined" className="login-signup-button"/>
  )
}