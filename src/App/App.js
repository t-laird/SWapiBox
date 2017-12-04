import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FilmText from './Components/FilmText/FilmText';
import Controls from './Components/Controls/Controls';
import CardContainer from './Components/CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-container">
          <FilmText />
        </div>
        <div className="right-container">
          <Header />
          <Controls />
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
