import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
        <section className="footer-subscription">

         <p className="footer-container-heading">
             Join the adventure newsletter to recieve our vacation deals
         </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' placeholder
                    ="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links ">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                
            </div>
            
        </div>
        <div className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                    TRV <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">TRVL &#169; 2021</small>
                <div className="social-icons">
                    <Link target='_blank' className="social-icon-link facebook" to='/' aria-label='Facebook'>
                     <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target='_blank' className="social-icon-link 
                    instagram" to='/' aria-label='Instagram'>
                     <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target='_blank' className="social-icon-link twitter" to='/' aria-label='Twitter'>
                     <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target='_blank' className="social-icon-link youtube" to='/' aria-label='Youtube'>
                     <i className="fab fa-youtube"></i>
                    </Link>
                    <Link target='_blank' className="social-icon-link linkedin" to='/' aria-label='Linkedin'>
                     <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
