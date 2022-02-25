import React from 'react'

import ContactUs from '../../shared/contact-us/ContactUs'
import ExploreJobs from '../../shared/explore-jobs/ExploreJobs'
import LandingHero from './LandingHero'
import Navbar from './Navbar'
import './LandingPage.scss'

export const LandingPage = () => {

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


  const hero = React.useRef();
  const explorejobs = React.useRef();
  const contactus = React.useRef();
  

  const handlePageScroll = (ev) => {
    const scrollTop = ev.target.scrollTop + 20;
    // console.log('st',scrollTop);
    // console.log('hero', hero.current.offsetTop);
    // console.log('explorejobs', explorejobs.current.offsetTop);
    // console.log('contactus', contactus.current.offsetTop);

    let active = null;
    if(scrollTop >= hero.current.offsetTop) active = 'hero';
    if(scrollTop >= explorejobs.current.offsetTop) active = 'explorejobs';
    if(scrollTop >= contactus.current.offsetTop) active = 'contactus';
    if(active) setNavData(data => ({...data, active}));

  }
  return (
    <>
    <div className='landing-page' onScroll={handlePageScroll}>      

      <Navbar navData={navData}/>

      <div ref={hero} id='hero'>
        <LandingHero/>
      </div>

      <div ref={explorejobs} id='explorejobs'>
        <ExploreJobs/>
      </div>

      <div ref={contactus} id='contactus'>
        <ContactUs/>
      </div>

    </div>
    </>
  )
}
