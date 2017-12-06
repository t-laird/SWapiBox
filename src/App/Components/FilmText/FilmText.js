import React from 'react';
import './FilmText.css';
import SWLogo from '../../../Assets/SWlogo.png';
import Button from '../Button/Button';

const FilmText = (props) => {
  console.log(props);
  return (
    <div className="FilmText">
      <div className="logo-container">
        <img src={SWLogo} alt="StarWars Logo" />
      </div>
      <div className="openingText">
        <div className="text-container">
          {props.filmData.filmText}
        </div>
      
      </div>
      <h1>{props.filmData.filmName}</h1>
      <h3>{props.filmData.filmYear}</h3>
    </div>
  );
}

export default FilmText;