import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FilmText from './Components/FilmText/FilmText';
import Controls from './Components/Controls/Controls';
import CardContainer from './Components/CardContainer/CardContainer';

import fetchFunctions from './fetchApiData';
import {
  BrowserRouter as Router
} from 'react-router-dom';


const { 
  getFavorites, 
  getFilmsData, 
  getPeopleData, 
  getPlanetsData, 
  getVehicleData } = fetchFunctions;
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: [],
      vehicles: [],
      people: [],
      planets: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const filmData = await getFilmsData();
    const favorites = await getFavorites();
    this.setState({
      filmData,
      favorites
    });
  }

  async fetchCardData(type) {
    const fetchFunctions = {
      people: getPeopleData,
      planets: getPlanetsData,
      vehicles: getVehicleData
    };

    const fetchedData = await fetchFunctions[type]();
    this.setState({
      [type]: fetchedData
    });
  }


  selectDataType = (type) => {
    const dataAlreadyFetched = this.state[type].length > 0;
    dataAlreadyFetched ? null : this.fetchCardData(type);
  }

  favoriteCard = (type, card) => {
    const findCardInFavorites = 
      this.state.favorites.find( favorite => favorite.name === card.name);
    if (findCardInFavorites === undefined) {
      this.setState({
        favorites: [...this.state.favorites, card]
      });

      localStorage.setItem(
        'j1okzybFavorites', 
        JSON.stringify([...this.state.favorites, card])
      );
    } else {
      const removeCardFromFavorites = 
        this.state.favorites.filter( favorite => favorite.name !== card.name );
      this.setState({
        favorites: removeCardFromFavorites
      });
      localStorage.setItem(
        'j1okzybFavorites', 
        JSON.stringify(removeCardFromFavorites)
      );
    }
  }


  render() {
    const dataFetched = this.state.filmData.length;
    const appContent = dataFetched 
      ?  (
        <div className="App">
          <div className="left-container">
            <FilmText    
              filmData={this.state.filmData} />
          </div>
          <div className="right-container">
            <Header 
              numFavorites={this.state.favorites.length} 
              currentData={this.state.currentData} 
              selectData={this.selectDataType}/>
            <Controls 
              currentData={this.state.currentData} 
              selectData={this.selectDataType} />
            <CardContainer 
              currentData={this.state.currentData} 
              people={this.state.people} 
              vehicles={this.state.vehicles} 
              planets={this.state.planets} 
              favorites={this.state.favorites} 
              favoriteCard={this.favoriteCard} />
          </div>
        </div>
      )
      : (
        <div className="Loading">
          <div className="content-wrap">
            <h1>Data is Loading! Please wait...</h1>
            <i className="icon-spin6"></i>
          </div>
        </div>
      );

    return (
      <Router>
        {appContent}
      </Router>
    );
  }
}

export default App;
