import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Controls = (props) => {
  return (
    <div className="Controls">
      <NavLink 
        to='/SWapiBox/people'
        className="Button" 
        onClick={ ()=> { props.selectData('people'); } } 
        activeClassName='Button selected'>
        <i className="icon-person"></i><span>people</span>
      </NavLink>
      <NavLink 
        to='/SWapiBox/vehicles' 
        className="Button" 
        onClick={ ()=> { props.selectData('vehicles'); } } 
        activeClassName='Button selected'>
        <i className="icon-rocket"></i><span>vehicles</span>
      </NavLink>
      <NavLink 
        to='/SWapiBox/planets' 
        className="Button" 
        onClick={ ()=> { props.selectData('planets'); } } 
        activeClassName='Button selected'>
        <i className="icon-globe"></i><span>planets</span>
      </NavLink>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func
};