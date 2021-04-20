import {  faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../../images/WOLF SOLUTION.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="row px-5 py-3 " style={{backgroundColor:'#FFE7DF'}}>
            <div className="col-md-3 about-us-footer">
                <img src={logo} className="w-50" alt="" />
                <p className="py-3">Being the best in our field means that we are committed to every project, we have ingenious ideas that become reality and we make every client happy.</p>
                <div className="social-icon">
                    <a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className="col-md-3 footer-our-service">
                <h3 className="footer-title">Our Services</h3>
                <ul>
                    <li><a href=""> &#62; Laptop Repair</a></li>
                    <li><a href=""> &#62; Computer Repair</a></li>
                    <li><a href=""> &#62; Hardware Update</a></li>
                    <li><a href=""> &#62; Apple Products Repair</a></li>
                    <li><a href=""> &#62; Data Backup & Recovery</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3 className="footer-title">Latest News</h3>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Why Your Computer Hates You</p>
                        <small>Jan 14, 2019</small>
                    </div>
                </div>
                
            </div>
            <div className="col-md-3">
                <h3 className="footer-title">Contact Us</h3>
                <p>Wolf Solution is the simple and easy to use WordPress Theme.</p>
                <div><p>No.320, Fifth Avenue Yunesco City Center, Chattogram</p></div>
            </div>
        </footer>
    );
};

export default Footer;