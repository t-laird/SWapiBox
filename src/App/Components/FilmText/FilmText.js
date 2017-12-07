import React, { Component } from 'react';
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

class FilmText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: props.filmData
    };
  }

  componentWillMount() {
    if (this.state.rawData.length > 0) {
      const splitTextRegex = new RegExp(/\s{3}/, 'g');
      const randomNum = Math.floor(Math.random() * 7);
      const convertNumToNumeral = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'};
      
      const randomFilm = this.state.rawData[randomNum];
      const splitTextArray = randomFilm.opening_crawl.split(splitTextRegex);    
  
      const filmName = randomFilm.title;
      const filmYear = randomFilm.release_date;
      const filmText = splitTextArray;
      const episodeNumber = randomFilm.episode_id;
  
      const numeral = convertNumToNumeral[episodeNumber];
  
      this.setState({
        filmText, filmName, filmYear, numeral
      });
    }
  }

  render() {
    const {numeral, filmName, filmText, filmYear} = this.state;
    return (
      <div className="FilmText">
        <div className="logo-container">
          <img src={SWLogo} alt="StarWars Logo" />
        </div>
        <div className="openingText">
          <img src={posters[numeral]} alt="starwars-poster" />
          <div className="text-container">
            <h1>Episode {numeral}</h1>
            <h2>{filmName.toUpperCase()}</h2>
            {filmText[0]}<br /> <br /> 
            {filmText[1]}<br /> <br />    
            {filmText[2]}<br />  <br />
          </div>
        
        </div>
        <h1>{filmName}</h1>
        <h3>{filmYear}</h3>
      </div>
    );
  }
}

export default FilmText;