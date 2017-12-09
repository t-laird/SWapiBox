import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Controls = (props) => {
  return (
    <div className="Controls">
      <NavLink to='/vehicles' className="Button" onClick={()=> {props.selectData('vehicles')}} activeClassName='Button selected'><i className="icon-rocket"></i>vehicles</NavLink>
      <NavLink to='/people' className="Button" onClick={()=> {props.selectData('people')}} activeClassName='Button selected'><i className="icon-person"></i>people</NavLink>
      <NavLink to='/planets' className="Button" onClick={()=> {props.selectData('planets')}} activeClassName='Button selected'><i className="icon-globe"></i>planets</NavLink>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func
};