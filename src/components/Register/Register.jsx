import React from 'react';
import './Register.css'

import { Link } from 'react-router-dom'

const Register = () => {

    return (
        <div className='register'>
            <div className="register_container">
                <div className="register_header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix_logo" />
                </div>

                {/* Form Section */}
                <div className="register_form_container">
                    <div className="register_form">
                        <h1 className='signIn_heading'>Sign Up</h1>
                        <form>
                            <input type="text" placeholder='Email or phone number' />
                            <input type="password" placeholder='Password' />
                            <button onClick={()=> alert('Register side is not working please login your email')}>Sign Up</button>
                        </form>
                        <div className="register_help">
                            <div className="check_box">
                                <input type="checkbox" />
                                <p>Remember me</p>
                            </div>
                            <div className="help">
                                <a href="">Need help?</a>
                            </div>
                        </div>
                        <div className="register_facebook">
                            <img src="https://www.designbust.com/download/640/png/facebook_logo_transparent512.png" alt="" />
                            <p>Login with Facebook</p>
                        </div>
                        <div className="register_additinal_helper">
                            <p>Have already accound? <Link to="/">Sign in now</Link></p>
                            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></span>
                        </div>
                    </div>
                </div>

                {/* Register Footer */}
                <div className="register_footer">
                    <div className="register_footer_container">
                        <div className="register_footer_heading">
                            <p>Questions? <span>Call 000-800-040-1843</span> </p>
                        </div>
                        <div className="register_footer_list">
                            <ul>
                                <li className='register_footer_link'>FAQ</li>
                                <li className='register_footer_link'>Cookie Preferences</li>
                            </ul>
                            <ul>
                                <li className='register_footer_link'>Help Centre</li>
                                <li className='register_footer_link'>Corporate Information</li>
                            </ul>
                            <ul>
                                <li className='register_footer_link'>Terms of Use</li>

                            </ul>
                            <ul>
                                <li className='register_footer_link'>Privacy</li>
                            </ul>
                        </div>
                        <div className="register_footer_language">
                            <i class="fas fa-globe"></i> English
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
