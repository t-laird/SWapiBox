import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {

  console.log(props);

  const displayVehicles = props.currentData === 'vehicles';
  const displayPeople = props.currentData === 'people';
  const displayPlanets = props.currentData === 'planets';
  const displayPlaceholder = props.currentData === null;
  const displayFavorites = props.currentData === 'View Favorites';

  const vehicleCards = displayVehicles ?
                        props.vehicles.map( (vehicle, index) => {
                          const isFavorited = props.favorites.find( favorite => vehicle.name === favorite.name);
                          const starClass = isFavorited ? 'icon-star' : 'icon-star-empty';
                          
                          return <Card favoriteCard={props.favoriteCard} starClass={starClass} cardData={vehicle} key={index} />
                        }) : null;
                        
  const peopleCards = displayPeople ?
                        props.people.map( (person, index) => {
                          const isFavorited = props.favorites.find( favorite => person.name === favorite.name);
                          const starClass = isFavorited ? 'icon-star' : 'icon-star-empty';
                          return <Card favoriteCard={props.favoriteCard} starClass={starClass} cardData={person} key={index} />
                        }) : null;
                        
  const planetCards = displayPlanets ?
                        props.planets.map( (planet, index) => {
                          const isFavorited = props.favorites.find( favorite => planet.name === favorite.name);
                          const starClass = isFavorited ? 'icon-star' : 'icon-star-empty';
                          return <Card favoriteCard={props.favoriteCard} starClass={starClass} cardData={planet} key={index} />
                        }) : null;
                        
  let favoriteCards = displayFavorites ?
                        props.favorites.map( (favorite, index) => {
                            return <Card favoriteCard={props.favoriteCard} starClass={'icon-star'} cardData={favorite} key={index} />
                          }) : null;

  const favoritesEmpty = displayFavorites && props.favorites.length === 0;

  favoriteCards = favoritesEmpty ? <h3>You don't have any favorites yet!</h3> : favoriteCards;
                      
  
  const placeholder = displayPlaceholder ? 
                          <h3>Click one of the options above to display information</h3>
                          : null; 

              
  return (
    <div className="CardContainer">
      <div className="row-wrapper">
        {placeholder}
        {vehicleCards}
        {peopleCards}
        {planetCards}      
        {favoriteCards}
      </div>
    </div>
  );
}

export default CardContainer;   