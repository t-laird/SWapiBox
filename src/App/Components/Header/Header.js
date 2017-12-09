import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <div className="Header">
    
      <NavLink 
        className="header-nav" 
        to='/'><h1>SW<span>api</span>BOX</h1>
      </NavLink>
      <NavLink 
        to='/favorites' 
        className="Button" 
        activeClassName='Button selected'>
        favorites <span><i className="icon-star"></i>{props.numFavorites}</span>
      </NavLink>

    </div>
  );
};

export default Header;

Header.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func,
  numFavorites: PropTypes.number
};