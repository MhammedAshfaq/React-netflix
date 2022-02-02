import React from 'react';
import './LandingHeader.css'

import { useNavigate, Link } from 'react-router-dom'
import { firebase } from '../../firebase/config'

const LandingHeader = () => {

    const navigate = useNavigate();

    const SigninGoogle = () => {
        var GoogleProvider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(GoogleProvider)
            .then((responce) => {
                navigate('/home')
                console.log(responce);
            })
            .catch((err) => {
                navigate('/')
                console.log(err);
            })
    }

    return (
        <div className='landing_header'>
            <div className="landing_header_container">
                {/* nav section */}
                <div className="landing_header_nav">
                    <img
                        className='landing_header_navlogo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt="navLogo"
                    />
                    <div className="landing_header_navside">
                        <h4 ><i class="fas fa-globe"></i> English</h4>
                        <Link className='landing_header_linknav' to='/signIn'>Sign Up</Link>
                    </div>
                </div>
                {/* Contents */}
                <div className="landing_header_contend">
                    <div className="landing_header_contend__container">
                        <h1 className='landing_header_contend_title'>
                            Unlimited movies, TV shows and more.
                        </h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h5>Ready to watch? Enter your email and enjoy your time.</h5>
                        <div className="landing_header_form">
                            <form>
                                <input  onClick={ SigninGoogle}   type="email" placeholder='Email address' />
                                <button type='submit'>Get Start<i class="fas fa-chevron-right"></i> </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingHeader;
