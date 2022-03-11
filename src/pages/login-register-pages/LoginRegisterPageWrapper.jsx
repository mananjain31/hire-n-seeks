import React from 'react'
import { Paper } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Navbar from '../../shared/navbar/Navbar'
import './LoginRegisterPageWrapper.scss'

const LoginRegisterPageWrapper = (props) => {

  const {pathname, hash} = useLocation();

  const navData = {
    active : pathname+hash,
    navlinks : [
      {
        to : '/',
        label : 'Home'
      }
    ]
  };

  return (
    <div className='login-register-page'>
      <Navbar navData = {navData} />
      <section className='page-section'>
        <Paper className='form-wrapper'>
          {props.children} {/* this is a <form> tag */}
        </Paper>
        <div className="side-image-container">
          <img src={props.sideImage}/>
        </div>
      </section>
    </div>
  )
}

export default LoginRegisterPageWrapper