import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../store/movies';

const MultiSelect = (props) => {
 const dispatch = useDispatch();
 const movies = useSelector((state) => state.movies.movies);
 let categories = [];
 movies.map((movie) => {
  return categories.push(movie.category);
 });

 categories = [...new Set(categories)];
 const handlerSelect = (event) => {
  let options = event.target.option;
  console.log(options);
  /*  let selectedOptions;
  for (let i = 0; i < options.length; i++) {
   selectedOptions.push(options[i].value);
  }
  console.log(selectedOptions); */
  //dispatch(moviesActions.filterCategories(event.target.value));
 };
 const handlerSubmit = (event) => {
  event.preventDefault();
 };

 return (
  <form onSubmit={handlerSubmit}>
   <select
    multiple={true}
    size={categories.length}
    name='categories'
    id='categories'
    value={categories}
    onChange={handlerSelect}
   >
    <option value='all'>Toutes les catégories</option>
    {categories.map((category, index) => (
     <option key={index} value={index}>
      {category}
     </option>
    ))}
   </select>
  </form>
 );
};
export default MultiSelect;
