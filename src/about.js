import React, { useState } from 'react'; // Import useState
import './about.css';
import './navb.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  const [isOpen, setIsOpen] = useState(false); // Declare state for mobile menu toggle

  const toggleMenu = () => setIsOpen(!isOpen);  // Function to toggle menu state

  return (
    <div className='aboutpage'>
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
      <div className='content'>
        <h2>WHO WE ARE?</h2>
        <p>At Busitron, we are more than just a networking platform; we are a community of forward-thinking businesses and professionals driven by a shared vision of growth, collaboration, and innovation. Founded with a passion for connecting businesses and fostering relationships, Busitron has evolved into a thriving ecosystem where opportunities flourish, knowledge flows, and connections thrive.</p>
        <h3>Our Story</h3>
        <p>Busitron was born from a simple idea: to create a space where businesses, regardless of their size or industry, could come together to explore new horizons. Our journey began with a vision of bridging gaps, sparking collaborations, and transforming the way businesses network. Over the years, we've grown into a dynamic platform where entrepreneurs, startups, established enterprises, and industry experts converge to create value-driven partnerships. Our commitment to excellence, innovation, and inclusivity has propelled us forward.</p>
        <h3>Our Values</h3>
        <p>Connection: We believe in the power of connection. Every interaction on Busitron is an opportunity to forge meaningful relationships, discover synergies, and drive mutual growth.</p>
        <p>Collaboration: Collaboration is at the heart of our community. We encourage businesses to work together, share ideas, and co-create solutions that transcend boundaries.</p>
        <p>Innovation: We embrace innovation as a catalyst for progress. By fostering a culture of creativity and forward thinking, we empower businesses to adapt and thrive in a rapidly changing world.</p>
        <p>Integrity: Trust is the cornerstone of our platform. We uphold the highest standards of integrity, ensuring that every interaction on Busitron is built on transparency and authenticity.</p>

        <h3>Our Community</h3>
        <p>Busitron's strength lies in its diverse and vibrant community. We are proud to host businesses from various industries, backgrounds, and regions, creating a rich tapestry of opportunities. Whether you're an entrepreneur with a groundbreaking idea, a seasoned professional seeking new ventures, or a business leader looking to expand horizons, Busitron welcomes you to join our thriving network.</p>
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
          <br />
          <button style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '15px' }}>Subscribe</button>
        </div>
        <div>
          <h4>Social Links</h4>
          <ion-icon name="logo-facebook" style={{ padding: '4%' }}></ion-icon>
          <ion-icon name="logo-instagram" style={{ padding: '4%' }}></ion-icon>
          <ion-icon name="logo-twitter" style={{ padding: '4%' }}></ion-icon>
          <ion-icon name="logo-youtube" style={{ padding: '4%' }}></ion-icon>


        </div>
      </div>

    </div>
  );
}
export default About;
