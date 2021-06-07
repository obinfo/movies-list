import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movies$ } from './data/movies';
import MoviesList from './components/moviesList/moviesList';
import MultiSelect from './components/MultiSelect/multiSelect';
import { moviesActions } from './store/movies';
import classes from './app.module.css';
import FilterIcon from './components/icons/filterIcon';
import Pagination from './components/pagination/pagination';

function App() {
 const dispatch = useDispatch();
 const movies = useSelector((state) => state.movies.movies);
 const isLoading = useSelector((state) => state.isLoading);
 const isMoviesEmpty = useSelector((state) => state.movies.isMoviesEmpty);
 const isOpenFilter = useSelector((state) => state.movies.isOpenFilter);

 const [currentPagination, setCurrentPagination] = useState({
  paginatedMovie: movies,
  currentPage: 1,
  itemsPerPage: 5,
 });

 //const itemsPerPage = useSelector((state) => state.movies.itemsPerPage);
 //const currentPage = useSelector((state) => state.movies.currentPage);

 const itemsPerPageRef = useRef();
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

 const handlerChangeNumPage = (event) => {
  event.preventDefault();
  setCurrentPagination((prevState) => {
   return { ...prevState, itemsPerPage: itemsPerPageRef.current.value };
  });
  /*  dispatch(
   moviesActions.itemsPerPageHandlerChange(itemsPerPageRef.current.value)
  ); */
 };
 useEffect(() => {
  setCurrentPagination((prevState) => {
   return {
    ...prevState,
    paginatedMovie: Pagination.getData(
     movies,
     currentPagination.currentPage,
     currentPagination.itemsPerPage
    ),
   };
  });
 }, [movies, currentPagination.currentPage, currentPagination.itemsPerPage]);

 const handlePageChange = (page) => {
  setCurrentPagination((prevState) => {
   return { ...prevState, currentPage: page };
  });
  //dispatch(moviesActions.changeCurrentPage(page));
 };

 return (
  <div>
   {!isMoviesEmpty && (
    <div className={classes.filter} onClick={handlerOpenFilter}>
     <FilterIcon />
    </div>
   )}
   <form onSubmit={handlerChangeNumPage}>
    <label htmlFor='itemsPerPage'>Nombre de film par page</label>
    <input type='text' ref={itemsPerPageRef} />
    <button onClick={handlerChangeNumPage}>OK</button>
   </form>
   {!isMoviesEmpty && !isLoading && isOpenFilter && <MultiSelect />}
   {isLoading && <div>Wait for loading data...</div>}
   {isMoviesEmpty && <div>No data .......</div>}
   {!isLoading && <MoviesList movies={currentPagination.paginatedMovie} />}
   <Pagination
    currentPage={currentPagination.currentPage}
    itemsPerPage={currentPagination.itemsPerPage}
    length={movies.length}
    onPageChanged={handlePageChange}
   />
  </div>
 );
}

export default App;
