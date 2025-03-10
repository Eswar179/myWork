import React, { useState } from 'react'
import './what.css'
import { Link } from 'react-router-dom';

const What = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);  // This toggles the menu open/close state
      };
      

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

            <div className='wcontent'>
                <h2>What we do</h2>
                <p>At Busitron, our mission is to connect businesses, foster collaboration, and drive growth through an innovative networking platform. We understand the power of strong connections and the impact they can have on your business's success. That's why we've developed a platform that brings together businesses of all sizes, industries, and backgrounds.</p>
                <h2>Our Core Services</h2>
                <h5> Networking Oppurtunities:</h5>
                <p>
                    We provide a dynamic and vibrant online platform where businesses can connect, engage, and build meaningful relationships. Whether you're seeking partnerships, clients, suppliers, or simply looking to expand your professional network, Busitron is the place to be.
                </p>
                <h5> Business Matchmaking</h5>
                <p>
                    Our intelligent matchmaking algorithms help you discover relevant connections effortlessly. We analyze your business profile and preferences to suggest potential partners, clients, or collaborators.
                </p>
                <h5>
                    Knowledge Sharing
                </h5>
                <p>
                    Knowledge is power, and we believe in empowering our members with valuable insights and information. Access a wealth of resources, webinars, and articles on industry trends, best practices, and growth strategies.
                </p>
                <h5>
                    Events and Webinars:
                </h5>
                <p>
                    Participate in exclusive networking events and webinars hosted by experts in various fields. These events are designed to facilitate learning, collaboration, and networking.
                </p>
                <h5>
                    B2B Marketplace
                </h5>
                <p>
                    Explore our B2B marketplace to discover new opportunities, source products or services, and grow your business. Our trusted platform connects you with reliable suppliers and buyers.
                </p>
                <h2>Why Choose Busitron</h2>
                <h5>Diverse Network</h5>
                <p>We bring together a diverse community of businesses, allowing you to tap into a wide range of expertise, ideas, and opportunities.</p>
                <h5>Customized Experience:</h5>
                <p>
                    Our platform adapts to your needs. Tailor your profile, preferences, and networking goals to get the most out of your Busitron experience.
                </p>
                <h5>
                    Data-Driven Insights:
                </h5>
                <p>
                    Gain valuable insights into your networking activities and measure your success through our analytics dashboard.
                </p>
                <h5>Secure and Reliable:</h5>
                <p>Your privacy and data security are our top priorities. Our platform employs state-of-the-art security measures to keep your information safe.</p>
                <p>Join Busitron today and unlock a world of possibilities for your business. Together, we can create valuable connections and drive growth that propels your business to new heights.</p>

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
    )
}

export default What
