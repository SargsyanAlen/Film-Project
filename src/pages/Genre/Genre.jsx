import './Genre.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const Genre = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const {genreMovie} = useSelector((state) => state.genresData);

  const imgUrl = "https://image.tmdb.org/t/p/w500/";


  return (
    <div className='genre'>
          {
              genreMovie.map((genre) => {
                  return (
                      <div key={genre.id}>
                          <h3>{genre.title}</h3>
                          <NavLink to={`/${genre.id}`}>
                              <img className='img' src={imgUrl + genre.poster_path} />
                          </NavLink>
                      </div>
                  )
              })
          }

          <button onClick={() => navigate(-1)} className='home-btn'>Go To Home Page</button>

    </div>
  )
}

export default Genre;