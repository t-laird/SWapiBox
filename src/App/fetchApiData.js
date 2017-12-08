async function fetchSWData() {
  const checkLocalVehicle = 
    JSON.parse(
      localStorage.getItem('j1okzybVehicle')
    );
  const checkLocalPlanet = 
    JSON.parse(
      localStorage.getItem('j1okzybPlanet')
    );
  const checkLocalPeople = 
    JSON.parse(
      localStorage.getItem('j1okzybPeople')
    );
  const checkLocalFilms = 
    JSON.parse(
      localStorage.getItem('j1okzybFilms')
    );
  const checkLocalFavorites = 
    JSON.parse(
      localStorage.getItem('j1okzybFavorites')
    );
  
  let planetData;
  let peopleData;
  let vehicleData;
  let filmData;
  let favorites;
  
  if (!checkLocalVehicle) {
    vehicleData = await fetchVehicleData();
    localStorage.setItem('j1okzybVehicle', JSON.stringify(vehicleData));
  } else {
    vehicleData = checkLocalVehicle;
  }
  
  if (!checkLocalPlanet) {
    planetData = await fetchPlanetData();
    localStorage.setItem('j1okzybPlanet', JSON.stringify(planetData));
  } else {
    planetData = checkLocalPlanet;
  }
  
  if (!checkLocalPeople) {
    peopleData = await fetchPeopleData();
    localStorage.setItem('j1okzybPeople', JSON.stringify(peopleData));
  } else {
    peopleData = checkLocalPeople;
  }
  if (!checkLocalVehicle) {
    vehicleData = await fetchVehicleData();
    localStorage.setItem('j1okzybVehicle', JSON.stringify(vehicleData));
  } else {
    vehicleData = checkLocalVehicle;
  }
  if (!checkLocalFilms) {
    filmData = await fetchFilmData();
    localStorage.setItem('j1okzybFilms', JSON.stringify(filmData));
  } else {
    filmData = checkLocalFilms;
  }
  
  if (!checkLocalFavorites) {
    favorites = [];
  } else {
    favorites = checkLocalFavorites;
  }
  
  return {peopleData, planetData, vehicleData, filmData, favorites};
} 



async function fetchVehicleData() {
  const vehicleFetch = await fetch("https://swapi.co/api/vehicles/");
  const vehicleData = await vehicleFetch.json();

  const cleanVehicleData = vehicleData.results.map( vehicle => {
    return {
      name: vehicle.name, 
      model: vehicle.model, 
      class: vehicle.vehicle_class, 
      passengers: vehicle.passengers
    };
  });
  return cleanVehicleData;
}

async function fetchPeopleData() {
  const peopleFetch = await fetch("https://swapi.co/api/people/"); 
  const peopleData = await peopleFetch.json(); 
  const peoplePromises = peopleData.results.map(async(person) => {
    const homeworldFetch = await fetch(person.homeworld);
    const homeworld = await homeworldFetch.json();
    const speciesFetch = await fetch(person.species[0]);
    const species = await speciesFetch.json();

    return {
      name: person.name, 
      homeworld: homeworld.name, 
      species: species.name, 
      population: 
      homeworld.population
    };
  });
  return Promise.all(peoplePromises);
}

async function fetchPlanetData() {
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
    const cleanResidentNames = residentNames.length 
      ? residentNames.join('\n')
      : 'none';

    return {
      name: planet.name, 
      terrain: planet.terrain, 
      population: planet.population, 
      climate: planet.climate, 
      residents: cleanResidentNames
    };
  });

  return Promise.all(planetPromises);
}

async function fetchFilmData() {
  const dataRequest = await fetch('https://swapi.co/api/films/');
  const jsonData = await dataRequest.json();

  const cleanFilmData = jsonData.results.map( film => {
    const {title, opening_crawl, episode_id, release_date} = film;
    return {title, opening_crawl, episode_id, release_date} ;
  });

  return cleanFilmData;
}

export default fetchSWData;