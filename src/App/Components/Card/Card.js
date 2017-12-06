import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {

  const personCard = props.person ? (
    <div className="card-container">
      <div className="card-header">
        <h2>{props.person.name}</h2>
        <Button icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.person}/>
      </div>
      <h5>Species: {props.person.species}</h5>
      <h5>Homeworld: {props.person.homeworld}</h5>
      <h5>Population of Homeworld: {props.person.population}</h5>
    </div>
  ) : null;

  const planetCard = props.planet? (
    <div className="card-container">    
      <div className="card-header">
        <h2>{props.planet.name}</h2>
        <Button icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.planet}/>
      </div>
      <h5>Terrain: {props.planet.terrain}</h5>
      <h5>Population: {props.planet.population}</h5>
      <h5>Climate: {props.planet.climate}</h5>
      <h5>Notable Residents: {props.planet.residents}</h5>
    </div>
  ) : null;

  const vehicleCard = props.vehicle? (
    <div className="card-container">    
      <div className="card-header">
        <h2>{props.vehicle.name}</h2>
        <Button icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.vehicle}/>
      </div>
      <h5>Model: {props.vehicle.model}</h5>
      <h5>Class: {props.vehicle.vehicle_class}</h5>
      <h5>No. Passengers: {props.vehicle.passengers}</h5>
    </div>
  ) : null;

  return (
    <div className="Card">
      {personCard}
      {planetCard}
      {vehicleCard}
    </div>
  );
}

export default Card;