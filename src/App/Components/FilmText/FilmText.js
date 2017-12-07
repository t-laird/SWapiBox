import React from 'react';
import './FilmText.css';
import SWLogo from '../../../Assets/SWlogo.png';
import episodeI from '../../../Assets/starwarsI.png';
import episodeII from '../../../Assets/starwarsII.png';
import episodeIII from '../../../Assets/starwarsIII.png';
import episodeIV from '../../../Assets/starwarsIV.png';
import episodeV from '../../../Assets/starwarsV.png';
import episodeVI from '../../../Assets/starwarsVI.png';
import episodeVII from '../../../Assets/starwarsVII.png';

const posters = {
  I: episodeI,
  II: episodeII,
  III: episodeIII,
  IV: episodeIV,
  V: episodeV,
  VI: episodeVI,
  VII: episodeVII,
}

const FilmText = (props) => {
  console.log(props);
  return (
    <div className="FilmText">
      <div className="logo-container">
        <img src={SWLogo} alt="StarWars Logo" />
      </div>
      <div className="openingText">
        <img src={posters[props.filmData.episode]} alt="starwars-poster" />
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