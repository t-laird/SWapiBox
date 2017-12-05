import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FilmText from './Components/FilmText/FilmText';
import Controls from './Components/Controls/Controls';
import CardContainer from './Components/CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmName: '',
      filmYear: '',
      filmText: '',
      numFavorites: 5,
      filmTextOpen: true
    }
  }

  componentDidMount() {
    // fetch('https://swapi.co/api/films/1/')
    //   .then(response => response.json())
    //     .then(data => {
    //       const filmName = data.title;
    //       const filmYear = data.release_date;
    //       const filmText = data.opening_crawl;

    //       this.setState({
    //         filmName, filmYear, filmText
    //       });
    //     })
  }

  closeFilmText = () => {
    
  }


  render() {
    return (
      <div className="App">
        <div className="left-container">
          <FilmText    
          filmName = {this.state.filmName}
          filmYear = {this.state.filmYear}
          filmText = {this.state.filmText}
          filmTextOpen = {this.state.filmTextOpen} />
        </div>
        <div className="right-container">
          <Header numFavorites={this.state.numFavorites}/>
          <Controls />
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
