import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const icon = props.icon 
    ? (<i className={props.icon}></i>) 
    : null;
  return (
    <div 
      className={props.buttonClass} 
      onClick={()=>{ props.favoriteCard(props.type, props.card ); }}
    >
      {props.type} {icon}
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
  card: PropTypes.object
};