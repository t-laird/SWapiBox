import React from 'react';
import './FilmText.css';
import SWLogo from '../../../Assets/SWlogo.png';
import Button from '../Button/Button';

const FilmText = (props) => {

  return (
    <div className="FilmText">
      <div className="logo-container">
        <img src={SWLogo} alt="StarWars Logo" />
      </div>
      <div className="openingText">
        <div className="text-container">
          {props.filmText}
        </div>
      
      </div>
      <h1>{props.filmName}</h1>
      <h3>{props.filmYear}</h3>
      {/* <Button /> */}
    </div>
  );
}

export default FilmText;