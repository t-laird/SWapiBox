import React from 'react';
import './CardContainer.css';
import PropTypes from 'prop-types';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Favorites from '../Favorites/Favorites';
import Vehicles from '../Vehicles/Vehicles';
import Placeholder from '../Placeholder/Placeholder';
import {
  Route,
  Switch
} from 'react-router-dom';

const CardContainer = (props) => {             
  return (
    <div className="CardContainer">
      <div className="row-wrapper">
        <Switch>
          <Route 
            exact path='/SWapiBox/' 
            render={(routeProps) => (
              <Placeholder {...routeProps} />
            )} />
          <Route 
            exact path='/SWapiBox/people' 
            render={(routeProps) => (
              <People 
                favoriteCard={props.favoriteCard} 
                peopleData={props.people} 
                favorites={props.favorites} 
                {...routeProps}/>
            )} />
          <Route 
            path='/SWapiBox/vehicles' 
            render={(routeProps) => (
              <Vehicles 
                favoriteCard={props.favoriteCard} 
                vehicleData={props.vehicles} 
                favorites={props.favorites} 
                {...routeProps}/>
            )} />
          <Route 
            path='/SWapiBox/planets' 
            render={(routeProps) => (
              <Planets 
                {...routeProps} 
                favoriteCard={props.favoriteCard} 
                planetData={props.planets}
                favorites={props.favorites}/>
            )} />
          <Route 
            path='/SWapiBox/favorites' 
            render={(routeProps) => (
              <Favorites 
                {...routeProps} 
                favoriteCard={props.favoriteCard} 
                favorites={props.favorites}/>
            )} />
        </Switch>
      </div>
    </div>
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