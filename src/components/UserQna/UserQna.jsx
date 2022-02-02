import React from 'react';
import './UserQna.css'

import QnaList from '../../netflixQna'

import { firebase } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'

const UserQna = () => {

    var navigate = useNavigate();
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
        <div className='qna'>
            <div className="qna_container">
                <div className="qna_content">
                    <h1>Frequently Asked Questions</h1>
                    <div className="qna_section">
                        {
                            QnaList.map((data, index) => {
                                return (
                                    <div className="qna_list">
                                        <h2 class>{data.header}</h2>
                                        <i onClick={() => alert(data.body)} class="fas fa-plus"></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* qna signin section */}
                    <div className="qna_signin">
                        <div className="qna_signin_container">
                            <p>Ready to watch? Enter your email and enjoy your time.</p>
                            <div className="qna_signin_input">
                                <form>
                                    <input onClick={SigninGoogle} type="email" placeholder='Email address' />
                                    <button type='submit'>Get Start<i class="fas fa-chevron-right"></i> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserQna;
