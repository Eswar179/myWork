import React, { useState, useEffect } from 'react';
import './Home.css';
import './navb.css';
import { Link } from 'react-router-dom';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            heading: "WELCOME TO",
            subheading: "BUSITRON",
            content: "Unlocking Opportunities, One Connection at a Time"
        },
        {
            heading: "WELCOME TO",
            subheading: "BUSITRON",
            content: "Empowering Business, Together We Grow"
        },
        {
            heading: "WELCOME TO",
            subheading: "BUSITRON",
            content: "Linking Business, Unleashing Potential"
        }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='hm1'>
            <div className='homepage'>
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
                        &#9776;
                    </div>
                </nav>

                <div className="slideshow">
                    <div className="slide">
                        <h2>{slides[currentSlide].heading}</h2>
                        <h1>{slides[currentSlide].subheading}</h1>
                        <p>{slides[currentSlide].content}</p>
                    </div>
                    <div className="carousel-controls">
                        <button className="prev" onClick={prevSlide}>&lt;</button>
                        <button className="next" onClick={nextSlide}>&gt;</button>
                    </div>
                </div>
            </div>

            <div className='hm2' style={{ padding: '0% 10%', fontWeight: 'bold' }}>

                <div className='hm3' >
                    <h2 style={{ padding: '0% 10%', textAlign: 'center',  marginTop:'2% 0%'}}>WHAT WE DO</h2>
                    <p style={{ textAlign: 'center' }}>At Busitron, our mission is to connect businesses, foster
                        collaboration, and drive growth through an innovative
                        networking platform. We understand the power of strong
                        connections and the impact they can have on your business's
                        success. That's why we've developed a platform that brings together businesses of all sizes, industries, and backgrounds.</p>

                </div>
                <div className="circle-container">
                    <div className="circlebox">
                        <div className="circle">
                            <img src="d-1.png" alt="Image 1" className="circle-image" />
                        </div>
                        <p className="circle-text">Networking Opportunities</p>
                    </div>
                    <div className="circlebox">
                        <div className="circle">
                            <img src="d-2.png" alt="Image 2" className="circle-image" />
                        </div>
                        <p className="circle-text">Business Matchmaking</p>
                    </div>
                    <div className="circlebox">
                        <div className="circle">
                            <img src="d-3.png" alt="Image 3" className="circle-image" />
                        </div>
                        <p className="circle-text">knowledge Sharing</p>
                    </div>
                    <div className="circlebox">
                        <div className="circle">
                            <img src="d-4.png" alt="Image 4" className="circle-image" />
                        </div>
                        <p className="circle-text">Events and webinars</p>
                    </div>
                    <div className="circlebox">
                        <div className="circle">
                            <img src="d-5.png" alt="Image 5" className="circle-image" />
                        </div>
                        <p className="circle-text">B2B Marketplace</p>
                    </div>
                </div>
            </div>

            <div className='wwa' style={{ margin: '5% 0%' }}>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom:'4%' }}>WHO WE ARE?</h2>
                </div>

                <div className='hm4'>
                    <div className='wl'>
                        <img src='who-img.jpg' style={{ width: '95%' }} />
                    </div>
                    <div className='wr'>
                        <p>Who We Are At Busitron, we are more than just a networking platform; we are a community of forward-thinking businesses and professionals driven by a shared vision of growth, collaboration, and innovation. Founded with a passion for connecting businesses and fostering relationships, Busitron has evolved into a thriving ecosystem where opportunities flourish, knowledge flows, and connections thrive.

                        </p>
                        <p>
                            Our Story Busitron was born from a simple idea: to create a space where businesses, regardless of their size or industry, could come together to explore new horizons. Our journey began with a vision of bridging gaps, sparking collaborations, and transforming the way businesses network. Over the years, we've grown into a dynamic platform where entrepreneurs, startups, established enterprises, and industry experts converge to create value-driven partnerships. Our commitment to excellence, innovation, and inclusivity has propelled us forward.
                        </p>

                        <button className='rm'>Read More</button>
                    </div>
                </div>
            </div>

            <div className='hm5'>
                <h2>ABOUT BUSITRON</h2>
                <p>
                    Busitron is where connections turn into collaborations, and collaborations lead to growth. We are a passionate team dedicated to redefining business networking in the digital age. Our platform empowers professionals from diverse backgrounds to connect, learn, and thrive together. Our journey began with a simple idea: to make networking accessible, enjoyable, and rewarding for all. Today, Busitron is a vibrant community of entrepreneurs, industry leaders, and visionaries, all united by the belief that together, we can achieve more. We invite you to explore our portfolio and experience the power of meaningful connections. Whether you're here to find new opportunities, share your expertise, or simply expand your network, Busitron is your trusted partner on this exciting journey.
                </p>


                <div >
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '3' }}>
                            <img src='w-1.png' style={{ width: '100%' }} />
                        </div>
                        <div style={{ flex: '2' }}>
                            <img src='w-2.png' style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '2', border: '1px solid grey' }}>
                            <img src='w-3.png' style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ flex: '3' }}>
                            <img src='w-4.png' style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className='hm8'>
                <h2 style={{ textAlign: 'center' }}> WHAT CUSTOMERS SAY</h2>
                <div className="cards-container">
                    <div className="card">
                        <div className="circlewcs">
                            <img
                                src="c-2.png"
                                alt="John Doe"
                                className="circle-imagewcs"
                            />
                        </div>
                        <h3 className="card-name">SHAIK ZOBAIN</h3>
                        <h4>Director</h4>
                        <p className="card-content">
                            " I've been a member of Busitron, and I've watched it evolve into a dynamic community of professionals. The webinars they offer are top-notch, providing valuable insights and strategies for networking success. I highly recommend Busitron to anyone looking to grow their network. "
                        </p>
                    </div>

                    <div className="card">
                        <div className="circlewcs">
                            <img
                                src="c-1.png"
                                alt="Jane Smith"
                                className="circle-imagewcs"
                            />
                        </div>
                        <h3 className="card-name">SMITH HENRY</h3>
                        <h4>CEO</h4>
                        <p className="card-content">
                            " I had the pleasure of attending the ConnectLocal Business Mixer organized by Busitron. It was an incredible experience. The connections I made during the event have opened doors to new collaborations and partnerships. Busitron truly understands the power of networking. "
                        </p>
                    </div>

                    <div className="card">
                        <div className="circlewcs">
                            <img
                                src="c-3.png"
                                alt="Alice Johnson"
                                className="circle-imagewcs"
                            />
                        </div>
                        <h3 className="card-name" style={{ padding: " 10% 0%" }}> ROBERT KEN</h3>
                        <h4>entrepreneur</h4>
                        <p> As a business owner, I understand the importance of networking. Busitron's platform has been instrumental in connecting me with potential clients and partners. It's an invaluable tool for anyone looking to expand their business reach.

                        </p>
                    </div>
                </div>


            </div>

            <div className='hm9' style={{ padding: '5% 10%', color: 'white' }}>
                <div className='ib'>
                    <h2>
                        1500+

                    </h2>
                    <h5>
                        Cups of Coffee
                    </h5>
                </div>

                <div className='ib'>
                    <h2>
                        1000+

                    </h2>
                    <h5>
                        Industries

                    </h5>
                </div>
                <div className='ib'>
                    <h2>
                        20000+

                    </h2>
                    <h5>
                        Business owners

                    </h5>
                </div>
                <div className='ib' >
                    <h2>
                        2000+

                    </h2>
                    <h5>
                        collaborations
                    </h5>
                </div>



            </div>


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
                    <div style={{ margin: '6% 0%' }}>
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

export default Home;
