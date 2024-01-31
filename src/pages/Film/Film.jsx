import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOneFilm, fetchMovieTrailer } from '../../store/slices/filmsSlice';
import './Film.css';

const Film = () => {

    const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";

    const { oneFilm } = useSelector((state) => state.filmsData);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const iframe = useRef(null);

    useEffect(() => {
        dispatch(fetchOneFilm(id));
        dispatch(fetchMovieTrailer({id, iframe}));
    }, [id]);
    
    return (
        <>
            <div className='film-info'>
                <h1>{oneFilm?.title}</h1>
                <img src={imgBaseUrl + oneFilm?.backdrop_path} />
                <h2>Film Budget : {oneFilm?.budget}</h2>
                {/* <h3>Film Genres : {oneFilm?.genres[0]?.name}, {oneFilm?.genres[1]?.name}, {oneFilm?.genres[2]?.name}</h3> */}
                <h3>Film Main Genres : {oneFilm?.genres?.name}</h3>
                <a href={oneFilm?.homepage} target='_blank'>Film Home Page</a>
                <p>Film Info : {oneFilm?.overview}</p>
                <h4>Popularity : {oneFilm.popularity}</h4>
                <h4>Film Released : {oneFilm.release_date}</h4>
                <h5>Film Status : {oneFilm.status}</h5>
                <h5>Film Tagline : {oneFilm.tagline}</h5>
                <iframe ref={iframe} />
            </div>
            <button className='back' onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default Film;