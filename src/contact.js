import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './contact.css'
import { Button } from 'bootstrap';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">BUSITRON</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/what">What We Do</Link>
          <a href="https://marketplace.busitron.com/">Marketplace</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon for mobile menu */}
        </div>
      </nav>

      <div className='contactpage'>
        <div >
          <h2 style={{ marginBottom: '6%', marginTop: '6%' }}>REQUEST A CALL BACK</h2>
        </div>
        <input className='ff' type='text' placeholder='Full Name'></input>
        <input className='ff' type='text' placeholder='Phone Number'></input>
        <input className='ff' type='text' placeholder='Email Address'></input>
        <input className='fg' type='text' placeholder='Message'></input>
        <button style={{ padding: '1.5%  8%', backgroundColor: '#fae20a', color: 'smoke', border: '1px solid grey', borderRadius: '30px', marginBottom: '6%' }}>SEND</button>
      
      <div className='cbg'>

      </div>
      <div>
        <div style={{ margin:'6% 0%'}}>
          <h4 >
            BUSITRON<br />
            2nd floor, Uptown Cyberabad,<br />
            100 Feet Rd, Madhapur,<br />
            Hyderabad, Telangana 500081
          </h4>
        </div>


      </div>
      <div >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1903.0787619864168!2d78.393443!3d17.452173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006d28aae7%3A0x5a11d0e3f374bc19!2sBusitron%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1731664978157!5m2!1sen!2sin&gestureHandling=auto"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>


      </div>
      </div>
      <div className='abtftr'>
        <div>
          <h4>Contact Info</h4>
          <ul className='uls'>
            <li>info@busitron.com</li>
            <li>support@buaitron.com</li>

          </ul>

        </div>
        
        <div>
          <h4>Important Links</h4>
          <ul className='uls'>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>

          </ul>
        </div>
        <div>
        <h4>News Letter</h4>
        <input type='text' placeholder='enter your email'></input>
        <br/>
        <button style={{ backgroundColor:'yellow', color:'black', borderRadius:'15px'}}>Subscribe</button>
        </div>
        <div>
          <h4>Social Links</h4>
          <ion-icon name="logo-facebook" style={{padding:'4%'}}></ion-icon>
          <ion-icon name="logo-instagram" style={{padding:'4%'}}></ion-icon>
          <ion-icon name="logo-twitter" style={{padding:'4%'}}></ion-icon>
          <ion-icon name="logo-youtube" style={{padding:'4%'}}></ion-icon>
          

        </div>
      </div>

    </div>
  )
}

export default Contact
