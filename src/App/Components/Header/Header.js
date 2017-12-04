import React from 'react';
import './Header.css';
import Button from '../Button/Button';


const Header = (props) => {

  return (
    <div className="Header">
      <h1>SWAPI-BOX</h1>
      <Button />
    </div>
  );
}

export default Header;