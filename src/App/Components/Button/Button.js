import React from 'react';
import './Button.css';

const Button = (props) => {

  const favorites = props.favorites >= 0 ? (<i className="icon-star">{props.favorites}</i>) : null;
  const icon = props.icon ? (<i className={props.icon}></i>) : null;
  
  return (
    <div className={props.buttonClass} onClick={()=>{props.selectData(props.type)}}>
      {props.type} {icon}
      {favorites}
    </div>
  );
}

export default Button;