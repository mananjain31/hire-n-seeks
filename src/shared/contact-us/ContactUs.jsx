import React from 'react';
import './ContactUs.scss';
import SocialMediaSVG from '../../assets/social-media.svg'

const ContactUs = (props) => {
  return (
    <section className='contact-us page-section'>


      <div className="contact-us-body">
        <h2>Contact Us</h2>
        

        <div className="contact-us-content">
          <h3>Address</h3>
          <p>Indore, Madhya Pradesh, India</p>
          <h3>Email</h3>
          <p>
            mananjain31jan@gmail.com <br/>
            tiwarividhya2001@gmail.com <br/>
            jashsharma619@gmail.com <br/>
          </p>
          <h3>Contact Number</h3>
          <p>+91 7000784085</p>
        </div>
      </div>

      <div className='svg-image'>
        <img  src={SocialMediaSVG} alt="contact us image" />
      </div>

    </section>
  )
}

export default ContactUs