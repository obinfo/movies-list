import { useState, useEffect } from 'react';
import { movies$ } from './data/movies';

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

 let content = <di>Wait for loading data...</di>;
 if (!isLoading) {
  content = (
   <div className='App'>
    {movies.map((el) => {
     return <li key={el.id}>{el.title}</li>;
    })}
   </div>
  );
 }
 return <di>{content}</di>;
}

export default App;
