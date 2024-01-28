import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { incrementPage, decrementPage } from '../../store/slices/filmsSlice';
import "./Home.css";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const Home = () => {

    const dispatch = useDispatch();
    const { filmsByPage, isFethcing } = useSelector((state) => state.filmsData);
    
    return (
        <>
            <div className='home'>
                {
                    filmsByPage.map((film) => {
                        return (
                            <div key={film.id}>
                                <h3>{film.title}</h3>
                                <NavLink to={`/${film.id}`}>
                                    <img className='img' src={imgUrl + film.poster_path} />
                                </NavLink>
                            </div>
                        )
                    })
                }

            </div>
            <div className="buttons">
                <button
                    disabled={isFethcing} 
                    className='btn-next'
                    onClick={() => dispatch(decrementPage())}
                >
                Prev Films
                </button>
                <button
                    disabled={isFethcing} 
                    className='btn-next'
                    onClick={() => dispatch(incrementPage())}
                >
                Next Films
                </button>
            </div>
        </>
    )
}

export default Home;