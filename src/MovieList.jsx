// MovieList.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, addFavorite, removeFavorite } from './store/favActions';
import { Link } from 'react-router-dom';
import Header from './Header';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MovieList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { movies, loading, error, favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    const endpoint = search ? '/search/movie' : '/movie/popular';
    const params = {
      language: 'en-US',
      page: pageNumber,
      query: search || undefined, // Only include 'query' if searching
    };

    dispatch(fetchMovie(endpoint, params));
  }, [dispatch, pageNumber, search]);

  const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId);

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleNextPage = () => setPageNumber((prev) => prev + 1);
  const handlePrevPage = () => setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      
      <div style={{ backgroundColor: 'darkgray', padding: '20px' }}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={handleSearch}
          style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
        />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul className="movies-list">
            {movies.map((movie) => (
              <li key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="movie-image"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="title-container">
                    <h4 className="movie-title">{movie.title}</h4>
                  </div>
                </Link>
                <i
                  className={`star-icon ${isFavorite(movie.id) ? 'active' : ''} bi ${
                    isFavorite(movie.id) ? 'bi-star-fill' : 'bi-star'
                  }`}
                  onClick={() => handleFavoriteClick(movie)}
                ></i>
              </li>
            ))}
          </ul>
        )}
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={pageNumber === 1}>
            Previous
          </button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </>
  );
}

export default MovieList;
