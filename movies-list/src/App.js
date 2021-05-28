import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movies$ } from './data/movies';
import MoviesList from './components/moviesList/moviesList';
import { moviesActions } from './store/movies';
function App() {
 const dispatch = useDispatch();
 const movies = useSelector((state) => state.movies.movies);
 const isLoading = useSelector((state) => state.isLoading);

 useEffect(() => {
  movies$
   .then((movies) => {
    console.log(movies);
    dispatch(moviesActions.loadingData(movies));
   })
   .catch((err) => {
    console.log(err.message);
   });
 }, [dispatch]);

 return (
  <div>
   {isLoading && <div>Wait for loading data...</div>}
   {!isLoading && <MoviesList movies={movies} />};
  </div>
 );
}

export default App;
