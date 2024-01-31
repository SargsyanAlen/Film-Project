import React from 'react';
import { useDispatch } from 'react-redux';
import {fetchGenresMovies} from '../../../store/slices/genresSlice';
import { NavLink } from 'react-router-dom';
import './GenresBTN.css';

const GenresBTN = ({genre}) => {

  const dispatch = useDispatch();

  return (
    <NavLink to={`/genres/${genre.id}`} className='navlink' onClick={() => dispatch(fetchGenresMovies(genre.id))}>{genre.name}</NavLink>
  )
}

export default GenresBTN;