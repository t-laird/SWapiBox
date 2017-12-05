import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {

  const personCard = props.person ? (
    <div className="card-container">
      <div className="card-header">
        <h2>{props.person.name}</h2>
        <Button icon="icon-star-empty"/>
      </div>
      <h5>Homeworld: {props.person.homeworld}</h5>
      <h5>Species: {props.person.species}</h5>
      <h5>Language: {props.person.language}</h5>
      <h5>Population: {props.person.population}</h5>
    </div>
  ) : null;

  const planetCard = props.planet? (
    <div className="card-container">    
      <div className="card-header">
        <h2>{props.planet.name}</h2>
        <Button icon="icon-star-empty"/>
      </div>
      <h5>{props.planet.terrain}</h5>
      <h5>{props.planet.population}</h5>
      <h5>{props.planet.climate}</h5>
      <h5>{props.planet.residents}</h5>
    </div>
  ) : null;

  const vehicleCard = props.vehicle? (
    <div className="card-container">    
      <div className="card-header">
        <h2>{props.vehicle.name}</h2>
        <Button icon="icon-star-empty"/>
      </div>
      <h5>{props.vehicle.model}</h5>
      <h5>{props.vehicle.class}</h5>
      <h5>{props.vehicle.capacity}</h5>
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