import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import People from './People';
import Planets from './Planets';
import Favorites from './Favorites';
import Vehicles from './Vehicles';
import {
  Route,
  Switch
} from 'react-router-dom';


const CardContainer = (props) => {             
  return (
    <Switch>
      <Route path='/people' render={(routeProps) => (
        <People favoriteCard={props.favoriteCard} peopleData={props.people} favorites={props.favorites} {...routeProps}/>
      )} />
      <Route path='/vehicles' render={(routeProps) => (
        <Vehicles favoriteCard={props.favoriteCard} vehicleData={props.vehicles} favorites={props.favorites} {...routeProps}/>
      )} />
      <Route path='/planets' render={(routeProps) => (
        <Planets {...routeProps} favoriteCard={props.favoriteCard} planetData={props.planets} favorites={props.favorites}/>
      )} />
      <Route path='/favorites' render={(routeProps) => (
        <Favorites {...routeProps} favoriteCard={props.favoriteCard} favorites={props.favorites} />
      )} />
    </Switch>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  currentData: PropTypes.string,
  vehicles: PropTypes.array,
  favorites: PropTypes.array,
  favoriteCard: PropTypes.func,
  people: PropTypes.array,
  planets: PropTypes.array
};