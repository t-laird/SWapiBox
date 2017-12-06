import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {

  const displayVehicles = props.currentCards === 'vehicles';
  const displayPeople = props.currentData === 'people';
  const displayPlanets = props.currentData === 'planets';
  const displayPlaceholder = props.currentData === null;

  const vehicleCards = displayVehicles ?
                        props.vehicles.map( (vehicle, index) => {
                          return <Card vehicle={vehicle} key={index} />
                        }) : null;

  const peopleCards = displayPeople ?
                        props.people.map( (person, index) => {
                          return <Card person={person} key={index} />
                        }) : null;

  const planetCards = displayPlanets ?
                        props.planets.map( (planet, index) => {
                          return <Card planet={planet} key={index} />
                        }) : null;
  
  const placeholder = displayPlaceholder ? 
                        <h3>Click one of the options above to display information</h3>
                        : null; 
  
  return (
    <div className="CardContainer">
      {placeholder}
      {vehicleCards}
      {peopleCards}
      {planetCards}
    </div>
  );
}

export default CardContainer;   