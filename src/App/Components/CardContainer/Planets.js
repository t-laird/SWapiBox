import React from 'react';
import Card from '../Card/Card';

const Planets = (props) => {
  const planetCards = 
    props.planetData.map( (planet, index) => {
      const isFavorited = 
        props.favorites.find( favorite => planet.name === favorite.name);
      const starClass = isFavorited ? 'icon-star' : 'icon-star-empty';
      return (
        <Card 
          favoriteCard={props.favoriteCard} 
          iconType="icon-globe"
          starClass={starClass} 
          cardData={planet} 
          key={index} /> );
    });

  return (
    <div className="CardContainer">
      <div className="row-wrapper">
        {planetCards}
      </div>
    </div>
  );
}

export default Planets;