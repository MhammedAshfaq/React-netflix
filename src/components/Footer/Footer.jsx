import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <footer className='footer'>
                <div className="footer_container">
                    <div className="footer_header">
                        <p>Questions?Call <span href='https//localhost:300'>000-800-040-1843</span></p>
                    </div>
                    <div className="footer_list">
                        <ul>
                            <li className='footer_link'>FAQ</li>
                            <li className='footer_link'>Investor Relations</li>
                            <li className='footer_link'>Privacy</li>
                            <li className='footer_link'>Speed Test</li>
                        </ul>

                        <ul>
                            <li className='footer_link'>Help Centre</li>
                            <li className='footer_link'>Jobs</li>
                            <li className='footer_link'>Cookie Preferences</li>
                            <li className='footer_link'>Legal Notices</li>
                        </ul>

                        <ul>
                            <li className='footer_link'>Account</li>
                            <li className='footer_link'>Ways to Watch</li>
                            <li className='footer_link'>Corporate Information</li>
                            <li className='footer_link'>Only on Netflix</li>
                        </ul>

                        <ul>
                            <li className='footer_link'>Media Centre</li>
                            <li className='footer_link'>Terms of Use</li>
                            <li className='footer_link'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer_language">
                        <i class="fas fa-globe"></i> English
                    </div>
                    <div className="footer_logo">
                        <p>Netflix India</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
