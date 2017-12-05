import React from 'react';
import './Button.css';

const Button = (props) => {

  const favorites = props.favorites ? (<div className="favorites">{props.favorites}</div>) : null;

  return (
    <div className="Button">
      {props.type}{favorites}
    </div>
  );
}

export default Button;