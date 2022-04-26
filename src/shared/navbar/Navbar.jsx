import React from 'react'
import './Navbar.scss'
import { Divider, Drawer, Icon, IconButton, List, ListItem, ListItemText } from '@mui/material';
import {LoginSignupLogoutButton} from '../buttons/Buttons';
import { Box } from '@mui/system';
import bloggingSVG from '../../assets/blogging.svg'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({navData : navigationsData}) => {

  const user = useSelector(state => state.user);

  const {pathname, hash} = useLocation();
  
  const navData = navigationsData || {
      active : pathname+hash,
      navlinks : [
          {
              label : 'Jobs',
              to : '/jobs',
          },
          {
              label : 'User Profile',
              to : '/userprofile',
          }
      ]
  };
  if(user.is_recruiter) {
    navData.navlinks = navData.navlinks.concat([{
        label : 'Post a Job',
        to : '/postingjobdetails',
    },
    {
        label : 'Posted Jobs',
        to : '/postedjobs',
    }]);
  } 
  else {
    navData.navlinks = navData.navlinks.concat([{
        label : 'Applied Jobs',
        to : '/appliedjobs',
    }]);
  }

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(prev => !prev);
  
  const navlinks = navData && navData.navlinks ? navData.navlinks : [];
  const renderNavlinks = () => 
    navData.navlinks.map(navlink => 

      <li key={navlink.to}>
        <Link to={navlink.to} className={`${navData.active == navlink.to && 'active'}`}> 
          {navlink.label}
        </Link>
      </li>

  );

  const renderDrawerlinks = () => 
  <Box className='drawerlinks'>
      <List>
        <LoginSignupLogoutButton/>
        {
          navData.navlinks.map(navlink =>
            <Link to={navlink.to} onClick={toggleDrawer} key={navlink.to}>  
              <ListItem button>
                  {navlink.label}
              </ListItem>
              <Divider color="white" />
            </Link> 
          )
        }
      </List>
  </Box>


  return (
    <nav className='navbar'>

      <img className='nav-logo' src={bloggingSVG} />

      <ul className='navlinks desktop-only'>
        {renderNavlinks()}
        <li>
          <LoginSignupLogoutButton/>
        </li>
      </ul>

      <IconButton className="mobile-only" onClick={toggleDrawer} color="inherit">
        <Icon color="inherit">menu</Icon>
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
          }
        }}
        anchor={'right'}
        open={drawerOpen}
        onClose={toggleDrawer}
      >
          {renderDrawerlinks()}
      </Drawer>
    </nav>
  )
}

export default Navbar