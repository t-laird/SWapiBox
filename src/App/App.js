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
    // if (nextProps.currentData === 'vehicles') {
      const checkLocalVehicle = JSON.parse(localStorage.getItem('j1okzybVehicle'));
      const checkLocalPlanet = JSON.parse(localStorage.getItem('j1okzybPlanet'));
      const checkLocalPeople = JSON.parse(localStorage.getItem('j1okzybPeople'));
      const checkLocalFilms = JSON.parse(localStorage.getItem('j1okzybFilms'));
      const checkLocalFavorites = JSON.parse(localStorage.getItem('j1okzybFavorites'));

      let planetData;
      let peopleData;
      let vehicleData;
      let filmData;
      let favorites;

      if (!checkLocalVehicle) {
        vehicleData = await this.fetchVehicleData();
        localStorage.setItem('j1okzybVehicle', JSON.stringify(vehicleData));
        console.log('used fetch');
      } else {
        vehicleData = checkLocalVehicle;
        console.log('used localstorage');
      }

      if (!checkLocalPlanet) {
        planetData = await this.fetchPlanetData();
        localStorage.setItem('j1okzybPlanet', JSON.stringify(planetData));
        console.log('used fetch');
      } else {
        planetData = checkLocalPlanet;
        console.log('used localstorage');
      }

      if (!checkLocalPeople) {
        peopleData = await this.fetchPeopleData();
        localStorage.setItem('j1okzybPeople', JSON.stringify(peopleData));
        console.log('used fetch');
      } else {
        peopleData = checkLocalPeople;
        console.log('used localstorage');
      }
      if (!checkLocalVehicle) {
        vehicleData = await this.fetchVehicleData();
        localStorage.setItem('j1okzybVehicle', JSON.stringify(vehicleData));
        console.log('used fetch');
      } else {
        vehicleData = checkLocalVehicle;
        console.log('used localstorage');
      }
      if (!checkLocalFilms) {
        filmData = await this.fetchFilmData();
        localStorage.setItem('j1okzybFilms', JSON.stringify(filmData));
        console.log('used fetch');
      } else {
        filmData = checkLocalFilms;
        console.log('used localstorage');
      }

      if(!checkLocalFavorites) {
        favorites = [];
      } else {
        favorites = checkLocalFavorites;
      }

      setTimeout(()=> {this.setState({peopleData, planetData, vehicleData, filmData, favorites}); }, 3000);
  }

  async fetchVehicleData() {
    const vehicleFetch = await fetch("https://swapi.co/api/vehicles/");
    const vehicleData = await vehicleFetch.json();

    const cleanVehicleData = vehicleData.results.map( vehicle => {
      return {name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers};
    })
    
    return cleanVehicleData;
  }

  async fetchPeopleData() {
    const peopleFetch = await fetch("https://swapi.co/api/people/"); 
    const peopleData = await peopleFetch.json(); 
    const peoplePromises = peopleData.results.map(async(person) => {
      const homeworldFetch = await fetch(person.homeworld);
      const homeworld = await homeworldFetch.json();
      const speciesFetch = await fetch(person.species[0]);
      const species = await speciesFetch.json();

      return {name: person.name, homeworld: homeworld.name, species: species.name, population: homeworld.population};
    });

    return Promise.all(peoplePromises);
  }

  async fetchPlanetData() {
    const planetFetch = await fetch("https://swapi.co/api/planets/");  
    const planetData = await planetFetch.json();

    const planetPromises = planetData.results.map(async(planet) => {
      const planetResidents = planet.residents;
      const residentPromises = planetResidents.map(async(resident) => {
        const residentData = await fetch(resident);
        const residentParse = await residentData.json();
        return residentParse.name;
      });
      const residentNames = await Promise.all(residentPromises);
        const cleanResidentNames = residentNames.length ?
          residentNames.join('\n')
          : 'none';

      return {name: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: cleanResidentNames};
    });

    return Promise.all(planetPromises);
  }

  async fetchFilmData() {
    const dataRequest = await fetch('https://swapi.co/api/films/');
    const jsonData = await dataRequest.json();

    return jsonData.results;
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
