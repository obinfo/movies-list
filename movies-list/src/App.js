import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movies$ } from './data/movies';
import MoviesList from './components/moviesList/moviesList';
import MultiSelect from './components/MultiSelect/multiSelect';
import { moviesActions } from './store/movies';
import classes from './app.module.css';
import FilterIcon from './components/icons/filterIcon';

function App() {
 const dispatch = useDispatch();
 const movies = useSelector((state) => state.movies.movies);
 const isLoading = useSelector((state) => state.isLoading);
 const isMoviesEmpty = useSelector((state) => state.movies.isMoviesEmpty);
 const isOpenFilter = useSelector((state) => state.movies.isOpenFilter);

 useEffect(() => {
  movies$
   .then((movies) => {
    dispatch(moviesActions.loadingData(movies));
   })
   .catch((err) => {
    console.log(err.message);
   });
 }, [dispatch]);

 const handlerOpenFilter = () => {
  dispatch(moviesActions.toggleOpenFilter());
 };
 return (
  <div>
   {!isMoviesEmpty && (
    <div className={classes.filter} onClick={handlerOpenFilter}>
     <FilterIcon />
    </div>
   )}

   {!isMoviesEmpty && !isLoading && isOpenFilter && <MultiSelect />}
   {isLoading && <div>Wait for loading data...</div>}
   {isMoviesEmpty && <div>No data .......</div>}
   {!isLoading && <MoviesList movies={movies} />}
  </div>
 );
}

export default App;
