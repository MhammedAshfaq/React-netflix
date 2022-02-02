import React, { useEffect, useState } from 'react';
import './RowPost.css'

import axios from '../../axios/axios'
import { API_KEY, ImageUrl } from '../../constent'

import YouTube from 'react-youtube';

const RowPost = ({ title, fetchUrl, isLarge }) => {

    const [movies, setMovies] = useState([]);
    const [trailerKey, setTrailerKey] = useState();

    // fetching movie in the TMDB api
    useEffect(() => {
        axios.get(fetchUrl)
            .then((responce) => {
                setMovies(responce.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    //YouTube Trailer
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const FetchingTriler = (id) => {
        if (trailerKey) {
            setTrailerKey(null)
        } else {
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
                .then((responce) => {
                    if (responce.data.results.length !== 0) {
                        console.log(responce.data.results);
                        setTrailerKey(responce.data.results[0])
                    } else {
                        alert('Data not Found')
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <div className='row'>
            <h2 className='title' >{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie, index) => {
                        return (
                            <img
                                onClick={() => FetchingTriler(movie.id)}
                                key={movie.id}
                                className={`row_poster ${isLarge && 'row_poster_large'}`}
                                src={`${ImageUrl}${isLarge ? movie.poster_path ? movie.poster_path : movie.backdrop_path : movie.backdrop_path}`} alt={movie.name}
                            />
                        )
                    })
                }
            </div>
            {trailerKey && <YouTube videoId={trailerKey.key} opts={opts} />}
        </div>
    );
};

export default RowPost;
