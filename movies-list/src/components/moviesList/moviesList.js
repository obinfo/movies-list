import classes from './moviesList.module.css';
import Card from '../card/card';
import MovieItem from '../movieItem/movieItem';

const MoviesList = (props) => {
 return (
  <div className={classes.moviesList}>
   {props.movies.map((movie, index) => {
    return (
     <Card key={movie.id}>
      <MovieItem
       backgroundType={index % 2 === 0 ? 'backgroundEven' : 'backgroundOdd'}
       title={movie.title}
       category={movie.category}
       likes={movie.likes}
       dislikes={movie.dislikes}
      />
     </Card>
    );
   })}
  </div>
 );
};

export default MoviesList;
