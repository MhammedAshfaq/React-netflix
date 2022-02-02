import React from 'react';
import './RightJumbotron.css'

const RightJumbotron = ({title,subTitle,src}) => {
    return (
        <div className='rigth_jbn'>
            <div className="rigth_jbn_container">
                <div className="right_jbn_textsection">
                    <h1>{title}</h1>
                    <h4>{subTitle}</h4>
                </div>
                <div className="right_jbn_imagesection">
                    <video controls autoplay loop src={src}></video>
                </div>
            </div>
        </div>
    );
};

export default RightJumbotron;
