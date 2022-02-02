import React, { useEffect, useState } from 'react';
import './Navbar.css'

import { useNavigate} from 'react-router-dom'

const Navbar = () => {

    const [show, setShow] = useState(false);
    var navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, []);

    return (
        <div className={`navbar ${show && 'scroll_black'}`}>
            <img className='navbar_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                alt='netflix icon'
            />
            <img className='navbar_avtar'
                onClick={()=>{
                    navigate('/')
                }}
                src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                alt='netflix avatar'
            />
        </div>
    );
};

export default Navbar;
