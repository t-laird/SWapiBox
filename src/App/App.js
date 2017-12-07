import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FilmText from './Components/FilmText/FilmText';
import Controls from './Components/Controls/Controls';
import CardContainer from './Components/CardContainer/CardContainer';
import fetchSWData from './fetchApiData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: [],
      vehicleData: [],
      peopleData: [],
      planetData: [],
      favorites: [],
      filmTextOpen: true,
      currentData: null
    }
  }

  async componentDidMount() {
    const SWData = await fetchSWData();
    const {peopleData, planetData, vehicleData, filmData, favorites} = SWData;

    setTimeout(() => {this.setState({peopleData, planetData, vehicleData, filmData, favorites})}, 5000);

  }


  selectDataType = (type) => {
    this.setState({
      currentData: type
    })
  }

  favoriteCard = (type, card) => {
    const findCardInFavorites = this.state.favorites.find( favorite => favorite.name === card.name);
    console.log(findCardInFavorites);
    if (findCardInFavorites === undefined) {
      this.setState({
        favorites: [...this.state.favorites, card]
      });

      localStorage.setItem('j1okzybFavorites', JSON.stringify([...this.state.favorites, card]));
    } else {
      const removeCardFromFavorites = this.state.favorites.filter( favorite => favorite.name !== card.name );
      this.setState({
        favorites: removeCardFromFavorites
      });

      localStorage.setItem('j1okzybFavorites', JSON.stringify(removeCardFromFavorites));
    }
  }


  render() {
    console.log(this.state);
    const dataFetched = this.state.filmData.length;
    const appContent = dataFetched ?  (<div className="App">
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
                                            people={this.state.peopleData} 
                                            vehicles={this.state.vehicleData} 
                                            planets={this.state.planetData} 
                                            favorites={this.state.favorites} 
                                            favoriteCard={this.favoriteCard} />
                                        </div>
                                      </div>)
                                      : (<div className="Loading">
                                            <div className="content-wrap">
                                              <h1>Data is Loading! Please wait...</h1>
                                              <i className="icon-spin6"></i>
                                          </div>
                                        </div>);

                                        console.log(appContent);
    return (
      appContent
    );
  }
}

export default App;
