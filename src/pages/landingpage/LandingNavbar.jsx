import React from 'react'
import '../../shared/navbar/Navbar.scss'
import { Divider, Drawer, Icon, IconButton, List, ListItem, ListItemText } from '@mui/material';
import {LoginSignupLogoutButton} from '../../shared/buttons/Buttons';
import { Box } from '@mui/system';
import bloggingSVG from '../../assets/blogging.svg'

const LandingNavbar = ({navData}) => {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  // const LoginSignupLogoutButton = useLoginSignupLogoutButton({
  //   onClick : ()=>alert('clicked LoginSignupLogoutButton')
  // });

  const navlinks = navData && navData.navlinks ? navData.navlinks : [];
  const renderNavlinks = () => 
    navData.navlinks.map(navlink => 

      <li key={navlink.to}>
        <a href={`#${navlink.to}`} className={`${navData.active == navlink.to && 'active'}`}> 
          {navlink.label}
        </a>
      </li>

  );

  const renderDrawerlinks = () => 
  <Box className='drawerlinks'>
      <List>
        <LoginSignupLogoutButton>New User/Login</LoginSignupLogoutButton>
        {
          navData.navlinks.map(navlink =>
            <a href={`#${navlink.to}`} onClick={toggleDrawer} key={navlink.to}>  
            <ListItem button>
                {navlink.label}
            </ListItem>
            <Divider color="white" />
          </a> 
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
          <LoginSignupLogoutButton>New User/Login</LoginSignupLogoutButton>
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

export default LandingNavbar