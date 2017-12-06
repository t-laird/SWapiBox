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
      filmData: {
        filmName: '',
        filmYear: '',
        filmText: []
      },
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
      const vehicleData = await this.fetchVehicleData();
      // }
      // if (nextProps.currentData === 'planets') {
        const planetData = await this.fetchPlanetData();
        
        const peopleData = await this.fetchPeopleData();

        const filmData = await this.fetchFilmData();


        this.setState({peopleData, planetData, vehicleData, filmData});
    // }
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
    const randomFilm = Math.floor(Math.random() * 7 + 1);
    const dataRequest = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const jsonData = await dataRequest.json();

    const splitTextRegex = new RegExp(/\s{3}/, 'g');
    
    const splitTextArray = jsonData.opening_crawl.split(splitTextRegex);    
    
    const filmName = jsonData.title;
    const filmYear = jsonData.release_date;
    const filmText = splitTextArray;
    const episodeNumber = jsonData.episode_id;

    const convertNumToNumeral = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'};

    return {filmName, filmYear, filmText, episode: convertNumToNumeral[episodeNumber]};
  }


  selectDataType = (type) => {
    this.setState({
      currentData: type
    })
  }

  favoriteCard = (type, card) => {
    const findCardInFavorites = this.state.favorites.find( favorite => favorite === card);

    if (findCardInFavorites === undefined) {
      this.setState({
        favorites: [...this.state.favorites, card]
      });
    } else {
      const removeCardFromFavorites = this.state.favorites.filter( favorite => favorite !== card);
      this.setState({
        favorites: removeCardFromFavorites
      });
    }
  }


  render() {
    console.log(this.state);
    return (
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
            people={this.state.peopleData} 
            vehicles={this.state.vehicleData} 
            planets={this.state.planetData} 
            favorites={this.state.favorites} 
            favoriteCard={this.favoriteCard} />
        </div>
      </div>
    );
  }
}

export default App;
