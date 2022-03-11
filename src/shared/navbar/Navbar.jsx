import React from 'react'
import './Navbar.scss'
import { Divider, Drawer, Icon, IconButton, List, ListItem, ListItemText } from '@mui/material';
import {LoginSignupButton} from '../buttons/Buttons';
import { Box } from '@mui/system';
import bloggingSVG from '../../assets/blogging.svg'
import { Link } from 'react-router-dom';

const Navbar = ({navData}) => {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  // const LoginSignupButton = useLoginSignupButton({
  //   onClick : ()=>alert('clicked LoginSignupButton')
  // });

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
        <LoginSignupButton>New User/Login</LoginSignupButton>
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
          <LoginSignupButton>New User/Login</LoginSignupButton>
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