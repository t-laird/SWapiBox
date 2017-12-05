import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {
  const placeholder = props.cards ? null : (<h3>select a category</h3>);
  const mappedCards = props.cards ? props.cards.map( card => {
    return <Card />;
  }) : null;
  return (
    <div className="CardContainer">
      {placeholder}
      {mappedCards}
    </div>
  );
}

export default CardContainer;   