import React from 'react';
import Card from '../Card/Card';

const Vehicles = (props) => {
  const vehicleCards = props.vehicleData.map( (vehicle, index) => {
    const isFavorited = 
      props.favorites.find( favorite => vehicle.name === favorite.name);
    const starClass = isFavorited 
      ? 'icon-star' 
      : 'icon-star-empty';
    
    return <Card 
      favoriteCard={props.favoriteCard} 
      iconType="icon-rocket"
      starClass={starClass} 
      cardData={vehicle} 
      key={index} />;
  });
  return (
    vehicleCards
  );
};

export default Vehicles;