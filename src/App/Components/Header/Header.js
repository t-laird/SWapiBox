import React from 'react';
import './Header.css';
import Button from '../Button/Button';


const Header = (props) => {

  return (
    <div className="Header">
      <h1>SW<span>api</span>BOX</h1>
      <Button buttonClass="Button" type="View Favorites" favorites={props.numFavorites}/>
    </div>
  );
}

export default Header;