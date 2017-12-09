import React from 'react';
import Card from '../Card/Card';

const Favorites = (props) => {
  let favoriteCards = 
    props.favorites.map( (favorite, index) => {
      let iconType;
      if (favorite.homeworld) {
        iconType = 'icon-person';
      } else if (favorite.terrain) {
        iconType = 'icon-globe';
      } else {
        iconType = 'icon-rocket';
      }
      return (
        <Card 
          favoriteCard={props.favoriteCard} 
          starClass={'icon-star'} 
          cardData={favorite} 
          iconType={iconType}
          key={index} />
      );
    });

  const favoritesEmpty = props.favorites.length === 0;

  favoriteCards = favoritesEmpty 
    ? (<h3>You don't have any favorites yet!</h3>)
    : favoriteCards;

  return (
    favoriteCards
  );
};

export default Favorites;