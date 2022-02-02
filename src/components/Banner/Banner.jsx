import React, { useEffect, useState } from 'react';
import './Banner.css'

import { ImageUrl } from '../../constent'
import axios from '../../axios/axios'
import requsts from '../../requsts'

const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState();

    useEffect(() => {
        axios.get(requsts.fetchNetFlixOriginals)
            .then((responce) => {
                setBannerMovie(responce.data.results[Math.floor(Math.random() * responce.data.results.length - 1)])
            })
    }, []);

    return (
        <>
            <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${ImageUrl + bannerMovie?.backdrop_path})`
                }}
            >
                <div className="banner_content">
                    <h1 className='banner_title'>
                        {bannerMovie?.original_name || bannerMovie?.name || bannerMovie?.title}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_btn">Play</button>
                        <button className="banner_btn">My List</button>
                    </div>
                    <h2 className='banner_description'>
                        {bannerMovie?.overview}
                    </h2>
                </div>
                <div className="banner_bottom_fade"></div>
            </header>
        </>
    );
};

export default Banner;
