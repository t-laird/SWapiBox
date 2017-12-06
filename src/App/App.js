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
        filmText: ''
      },
      vehicleData: [],
      peopleData: [],
      planetData: [],
      numFavorites: 5,
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

      return {name: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: residentNames};
    });

    return Promise.all(planetPromises);
  }

  async fetchFilmData() {
    const randomFilm = Math.floor(Math.random() * 7 + 1);
    const dataRequest = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const jsonData = await dataRequest.json()
    
    const filmName = jsonData.title;
    const filmYear = jsonData.release_date;
    const filmText = jsonData.opening_crawl;

    return {filmName, filmYear, filmText};
  }


  selectDataType = (type) => {
    this.setState({
      currentData: type
    })
  }

  favoriteCard = (card) => {
    this.setState({
      favoritedCards: [...this.state.favoritedCards, card]
    });
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
          <Header numFavorites={this.state.numFavorites}/>
          <Controls selectData={this.selectDataType} />
          <CardContainer currentData={this.state.currentData} people={this.state.peopleData} vehicles={this.state.vehicleData} planets={this.state.planetData} />
        </div>
      </div>
    );
  }
}

export default App;
