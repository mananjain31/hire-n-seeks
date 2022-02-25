import React from 'react'
import './Navbar.scss'
import { Icon } from '@mui/material';
import {LoginSignupButton} from '../../shared/buttons/Buttons';

const Navbar = ({navData}) => {

  
  const navlinks = navData && navData.navlinks ? navData.navlinks : [];
  const renderNavlinks = () => 
  navData.navlinks.map(navlink => 

    <li key={navlink.to}>
      <a href={`#${navlink.to}`} className={`${navData.active == navlink.to && 'active'}`}> 
        {navlink.label}
      </a>
    </li>

  );

  return (
    <nav className='navbar'>
      <Icon >screen_search_desktop</Icon>
      <ul className='navlinks'>{renderNavlinks()}</ul>
      <LoginSignupButton>New User/Login</LoginSignupButton>
    </nav>
  )
}

export default Navbar