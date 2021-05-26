import { useState, useEffect } from 'react';
import { movies$ } from './data/movies';
import MoviesList from './components/moviesList/moviesList';

function App() {
 const [movies, setMovies] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  setIsLoading(true);
  movies$
   .then((movies) => {
    setMovies(movies);
    setIsLoading(false);
   })
   .catch((err) => {
    console.log(err.message);
   });
 }, []);

 /* const deleteOneMovie = (id) => {
  return setMovies(() => {
   return movies.filter((el) => el.id !== id);
  });
 };
 */
 let content = <div>Wait for loading data...</div>;
 if (!isLoading) {
  content = <MoviesList movies={movies} />;
 }
 return <div>{content}</div>;
}

export default App;
