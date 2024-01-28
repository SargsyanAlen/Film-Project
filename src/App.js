import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from './store/slices/genresSlice';
import { fetchFilmsByPage, fetchPrevFilmsByPage } from './store/slices/filmsSlice'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';

function App() {

  const { pageCount } = useSelector((state) => state.filmsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchFilmsByPage(pageCount))
    dispatch(fetchPrevFilmsByPage(pageCount))
  }, [pageCount]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Film />} />
      </Routes>
    </div>
  );
}

export default App;