import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Controls = (props) => {
  const vehiclesSelected = props.currentData === 'vehicles';
  const planetsSelected = props.currentData === 'planets';
  const peopleSelected = props.currentData === 'people';
  
  const vehicleClass = vehiclesSelected ? "Button selected" : "Button";
  const planetClass = planetsSelected ? "Button selected" : "Button";
  const peopleClass = peopleSelected ? "Button selected" : "Button";

  return (
    <div className="Controls">
      <NavLink to='/vehicles' onClick={()=> {props.selectData('vehicles')}} activeClassName='selected'>vehicles</NavLink>
      <NavLink to='/people' onClick={()=> {props.selectData('people')}} activeClassName='selected'>people</NavLink>
      <NavLink to='/planets' onClick={()=> {props.selectData('planets')}} activeClassName='selected'>planets</NavLink>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func
};