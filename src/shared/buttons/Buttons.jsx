import React from 'react'
import {Button, IconButton, Menu, MenuItem} from '@mui/material'
import './Buttons.scss'

import { useNavigate} from 'react-router-dom'
import { logoutUser } from '../../store/actions/user-actions'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowDropDown } from '@mui/icons-material'

export const LoginSignupLogoutButton = (props) => {

  const { loggedIn, userName } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const buttonText = loggedIn ? userName : 'New User/Login';
  
  const handleLoginOrLogoutClick = () => {    
    console.log(loggedIn);
    if(!loggedIn) navigate('/login')
    else dispatch(logoutUser());
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Button 
         style={{textTransform: 'none'}}
        color="inherit"
        endIcon={
        !loggedIn ? null
          : <ArrowDropDown/>
        } 
        {...props} 
        variant="outlined" className="login-signup-logout-button" 
      onClick={loggedIn ? handleMenuOpen : handleLoginOrLogoutClick}
      >  
        {buttonText} 
      </Button>
      {
        loggedIn &&
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLoginOrLogoutClick}>Logout</MenuItem>
        </Menu>
      }

    </>
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