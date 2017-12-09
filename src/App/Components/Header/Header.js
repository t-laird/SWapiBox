import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const Header = (props) => {
  const favoritesSelected = props.currentData === 'favorites';
  const favoritesClass = favoritesSelected ? "Button selected" : "Button";

  return (
    <div className="Header">
      <h1>SW<span>api</span>BOX</h1>
      <Button 
        buttonClass={favoritesClass}
        type="favorites" 
        selectData={props.selectData} 
        favorites={props.numFavorites} />
    </div>
  );
};

export default Header;

Header.propTypes = {
  currentData: PropTypes.string,
  selectData: PropTypes.func,
  numFavorites: PropTypes.number
};