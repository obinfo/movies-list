import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moviesActions } from '../../store/movies';
import ButtonWithIcon from '../buttonWithIcon/buttonWithIcon';
import DeleteIcon from '../icons/deleteIcon';
import DisLikeIcon from '../icons/dislikeIcon';
import LikeIcon from '../icons/likeIcon';

import classes from './movieItem.module.css';
const MovieItem = (props) => {
 const [isLiked, setIsLiked] = useState(false);
 const dispatch = useDispatch();

 const deleteHandler = (id) => {
  dispatch(moviesActions.deleteMovie(id));
 };
 let contentLikeDislike = (
  <div className={classes.toggleLike}>
   <LikeIcon />
  </div>
 );
 if (isLiked) {
  contentLikeDislike = (
   <div className={classes.toggleDislike}>
    <DisLikeIcon />
   </div>
  );
 }

 const handlerLikeAndDislike = (id) => {
  setIsLiked(!isLiked);
  if (isLiked) {
   dispatch(moviesActions.toggleDislike(id));
  } else {
   dispatch(moviesActions.toggleLike(id));
  }
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
   <div className={classes.actionsLikeAndDislike}>
    <div
     className={classes.iconLikeAndDislike}
     onClick={() => handlerLikeAndDislike(props.id)}
    >
     {contentLikeDislike}
    </div>
    <div onClick={() => deleteHandler(props.id)}>
     <ButtonWithIcon iconType='delete' handlerClick>
      <DeleteIcon />
     </ButtonWithIcon>
    </div>
   </div>
  </div>
 );
};

export default MovieItem;
