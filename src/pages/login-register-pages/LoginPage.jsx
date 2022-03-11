import React from 'react'

export const LoginPage = () => {
  

  const [navData, setNavData] = React.useState({
    active : "hero",
    navlinks : [
      {
        to : 'hero',
        label : 'Home'
      },
      {
        to : 'explorejobs',
        label : 'Explore Jobs'
      },
      {
        to : 'contactus',
        label : 'Contact Us'
      }
    ],
  });

  
  return (
    <div>LoginPage</div>
  )
}
