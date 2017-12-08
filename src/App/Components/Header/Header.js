import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import Proptypes


const Header = (props) => {
  const favoritesSelected = props.currentData === 'View Favorites';
  const favoritesClass = favoritesSelected ? "Button selected" : "Button";


  return (
    <div className="Header">
      <h1>SW<span>api</span>BOX</h1>
      <Button 
        buttonClass={favoritesClass}
        type="View Favorites" 
        selectData={props.selectData} 
        favorites={props.numFavorites} />
    </div>
  );
};

export default Header;