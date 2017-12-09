import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  const favoritesSelected = props.currentData === 'View Favorites';
  const favoritesClass = favoritesSelected ? "Button selected" : "Button";

  return (
    <div className="Header">
      <h1>SW<span>api</span>BOX</h1>
      <NavLink to='/favorites' className="Button" activeClassName='Button selected'>favorites <span><i className="icon-star"></i>{props.numFavorites}</span></NavLink>

    </div>
  );
};

export default Header;

Header.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func,
  numFavorites: PropTypes.number
};