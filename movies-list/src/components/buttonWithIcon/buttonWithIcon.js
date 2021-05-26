import classes from './buttonWithIcon.module.css';
const ButtonWithIcon = (props) => {
 const handlerClick = () => {
  props.onClickIcon();
 };
 return (
  <div className={classes.btn}>
   <div className={classes.likesAndDislikes}>
    <div
     onClick={handlerClick}
     className={[classes.icon, classes[props.iconType]].join(' ')}
    >
     {props.children}
    </div>

    <div className={[classes.titleText, classes[props.titleType]]}>
     {props.title}
    </div>
   </div>
  </div>
 );
};

export default ButtonWithIcon;
