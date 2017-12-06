import React from 'react';
import './FilmText.css';
import SWLogo from '../../../Assets/SWlogo.png';

const FilmText = (props) => {
  console.log(props);
  return (
    <div className="FilmText">
      <div className="logo-container">
        <img src={SWLogo} alt="StarWars Logo" />
      </div>
      <div className="openingText">
        <div className="text-container">
          <h1>Episode {props.filmData.episode}</h1>
          <h2>{props.filmData.filmName.toUpperCase()}</h2>
          {props.filmData.filmText[0]}<br /> <br /> 
          {props.filmData.filmText[1]}<br /> <br />    
          {props.filmData.filmText[2]}<br />  <br />
        </div>
      
      </div>
      <h1>{props.filmData.filmName}</h1>
      <h3>{props.filmData.filmYear}</h3>
    </div>
  );
}

export default FilmText;