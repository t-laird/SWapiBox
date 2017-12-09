import React from 'react';
import Card from '../Card/Card';

const People = (props) => {
  const peopleCards = 
    props.peopleData.map( (person, index) => {
      const isFavorited = 
        props.favorites.find( favorite => person.name === favorite.name);
      const starClass = isFavorited ? 'icon-star' : 'icon-star-empty';
      return (
        <Card 
          favoriteCard={props.favoriteCard}
          iconType="icon-person" 
          starClass={starClass} 
          cardData={person} 
          key={index} /> );
    });

  return (
    <div className="People">
      {peopleCards}
    </div>
  );
}

export default People;