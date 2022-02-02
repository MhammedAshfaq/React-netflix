import React from 'react';
import './LetfJumbotron.css'

const LetfJumbotron = ({ src, alt, title, subTitle }) => {
    return (
        <div>
            <div className='left_jbn'>
                <div className="left_jbn_container">
                    <div className="left_jbn_imagesection">
                        <img src={src} alt={alt} />
                    </div>
                    <div className="left_jbn_textsection">
                        <h1>{title}</h1>
                        <h4>{subTitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LetfJumbotron;
