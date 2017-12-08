import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const favorites = props.favorites >= 0 
    ? (<i className="icon-star">{props.favorites}</i>)
    : null;
  const icon = props.icon 
    ? (<i className={props.icon}></i>) 
    : null;
  const buttonFunction = props.favoriteCard 
    ? props.favoriteCard 
    : props.selectData;
  
  return (
    <div 
      className={props.buttonClass} 
      onClick={()=>{ buttonFunction(props.type, props.card ); }}
    >
      {props.type} {icon} {favorites}
    </div>
  );
};

export default Button;

Button.propTypes = {
  favorites: PropTypes.number,
  icon: PropTypes.string,
  favoriteCard: PropTypes.func,
  selectData: PropTypes.func,
  buttonClass: PropTypes.string,
  type: PropTypes.string,
  card: PropTypes.array
};