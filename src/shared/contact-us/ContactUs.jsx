import React from 'react';
import './ContactUs.scss';
// import SocialMediaSVG from '../../assets/social-media.svg'
import ContactImage from '../../assets/contact_us.svg'
import GmailIcon from '../../assets/icons-gmail.png'
import FacebookIcon from '../../assets/icons-facebook.png'
import TwitterIcon from '../../assets/icons-twitter.png'
import PhoneIcon from '../../assets/icons-phone.png'
import InstagramIcon from '../../assets/icons-instagram.png'
import LinkedinIcon from '../../assets/icons-linkedin.png'

const ContactUs = (props) => {
  return (
    <section className='contact-us page-section'>


      <div className="contact-us-body">
        <h2>Contact Us</h2>

        <div className='svg-image mobile-only'>
          <img src={ContactImage} alt="contact us image" />
        </div>

        <div className="contact-us-content">
          <h3>Address : </h3>
          <p>Indore, Madhya Pradesh, India</p>
          <h3>Team :</h3>
          <div className="team-member">
            <p>Manan Jain</p>
            <p>Jash Sharma</p>
            <p>Aditya Sharma</p>
            <p>Vindhya Tiwari</p>
          </div>
          <hr></hr>
          <div className="contact-icons-1">
            <img src={GmailIcon} alt="gmail icon" />
            <img src={InstagramIcon} alt="instagram icon" />
            <img src={LinkedinIcon} alt="linkedin icon" />
            <img src={FacebookIcon} alt="facebook icon" />
            <img src={TwitterIcon} alt="twitter icon" />
            <img src={PhoneIcon} alt="phone icon" />
          </div>          
        </div>
      </div>

      <div className='svg-image desktop-only'>
        <img src={ContactImage} alt="contact us image" />
      </div>

    </section>
  )
}

export default ContactUs