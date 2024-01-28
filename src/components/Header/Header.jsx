import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GenresBTN from './GenresBTN/GenresBTN';
import { fetchSearchFilm, changeText } from '../../store/slices/filmsSlice';
import './Header.css';

const Header = () => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const {genres} = useSelector((state) => state.genresData);
  const {text, search} = useSelector((state) => state.filmsData);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";


  useEffect(() => {
    if(text.length > 3) {
      dispatch(fetchSearchFilm(text));
      setOpen(true);
    } else {
      setOpen(false)
    }
  }, [text]);
  
  return (
    <header>
      <div className='genresBlock'>

        {
          genres.map((genre) => {
            return <GenresBTN key={genre.id} genre={genre}/>
          })
        }

        <div className='input'>
          <input 
            type="text" 
            placeholder='Search Film'
            value={text}
            onChange={(e) => dispatch(changeText(e.target.value))} 
          />
        </div>
      </div>

      {
        open && <div className="open">

          {
            search.map((film) => {
              return (
                <div>
                  <li key={film.id}>{film.title}</li>
                  <img src={imgBaseUrl + film.poster_path} />
                </div>
              )
            })
          }
          
        </div>
      }

    </header>
  )
}

export default Header;