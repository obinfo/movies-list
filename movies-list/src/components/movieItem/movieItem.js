import { useDispatch } from 'react-redux';
import { moviesActions } from '../../store/movies';
import ButtonWithIcon from '../buttonWithIcon/buttonWithIcon';
import DeleteIcon from '../icons/deleteIcon';
import DisLikeIcon from '../icons/dislikeIcon';
import LikeIcon from '../icons/likeIcon';

import classes from './movieItem.module.css';
const MovieItem = (props) => {
 const dispatch = useDispatch();

 const deleteHandler = (id) => {
  console.log(id);
  dispatch(moviesActions.deleteMovie(id));
 };

 return (
  <div className={[classes.movieItem, classes[props.backgroundType]].join(' ')}>
   <div className={classes.title}>{props.title}</div>
   <div className={classes.category}>{props.category}</div>
   <div className={classes.actions}>
    <div className={classes.likes}>
     <ButtonWithIcon title={props.likes}>
      <LikeIcon />
     </ButtonWithIcon>
    </div>
    <div className={classes.dislikes}>
     <ButtonWithIcon title={props.dislikes}>
      <DisLikeIcon />
     </ButtonWithIcon>
    </div>
   </div>
   <div onClick={() => deleteHandler(props.id)}>
    <ButtonWithIcon iconType='delete' handlerClick>
     <DeleteIcon />
    </ButtonWithIcon>
   </div>
  </div>
 );
};

export default MovieItem;
