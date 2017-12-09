import React from 'react';
import Card from '../Card/Card';

const Favorites = (props) => {
  let favoriteCards = 
    props.favorites.map( (favorite, index) => {
      let iconType = favorite.terrain ? "icon-globe" : "icon-rocket"
      return (
        <Card 
          favoriteCard={props.favoriteCard} 
          starClass={'icon-star'} 
          cardData={favorite} 
          iconType="icon-person"
          key={index} />
      );
    });

  const favoritesEmpty = props.favorites.length === 0;

  favoriteCards = favoritesEmpty 
    ? (<h3>You don't have any favorites yet!</h3>)
    : favoriteCards;

  return (
    <div className="Favorites">
      {favoriteCards}
    </div>
  );
}

export default Favorites;