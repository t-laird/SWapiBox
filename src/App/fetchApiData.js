async function getVehicleData() {  
  const localStorageVehicle = 
  JSON.parse(
    localStorage.getItem('j1okzybVehicle')
  );

  const vehicleData = localStorageVehicle 
    ? localStorageVehicle
    : await vehicleApiFetch();

  localStorage.setItem('j1okzybVehicle', JSON.stringify(vehicleData));
    
  return vehicleData;
}

async function vehicleApiFetch() {
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

async function getPeopleData() {
  const localStoragePeople = 
  JSON.parse(
    localStorage.getItem('j1okzybPeople')
  );

  const peopleData = localStoragePeople 
    ? localStoragePeople
    : await peopleApiFetch();

  localStorage.setItem('j1okzybPeople', JSON.stringify(peopleData));
  
  return peopleData;  
}

async function peopleApiFetch() {
  const peopleFetch = await fetch("https://swapi.co/api/people/"); 
  const peopleData = await peopleFetch.json(); 
  const peoplePromises = peopleData.results.map(async(person) => {
    const homeworld = await fetchPlanetData(person.homeworld);
    const species = await fetchSpeciesData(person.species[0]);

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

async function fetchPlanetData(url) {
  const homeworldFetch = await fetch(url);
  const homeworld = await homeworldFetch.json();

  return homeworld;
}

async function fetchSpeciesData(url) {
  const speciesFetch = await fetch(url);
  const species = await speciesFetch.json();

  return species;
}

async function getPlanetsData() {
  const localStoragePlanets = 
  JSON.parse(
    localStorage.getItem('j1okzybPlanet')
  );

  const planetsData = localStoragePlanets
    ? localStoragePlanets
    : await planetApiFetch();

  localStorage.setItem('j1okzybPlanet', JSON.stringify(planetsData));

  return planetsData;
}

async function planetApiFetch() {
  const planetFetch = await fetch("https://swapi.co/api/planets/");  
  const planetData = await planetFetch.json();

  const planetPromises = planetData.results.map(async(planet) => {
    const planetResidents = planet.residents;
    const residentPromises = planetResidents.map(async(resident) => {
      return fetchPersonData(resident);
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

async function fetchPersonData(url) {
  const personFetch = await fetch(url); 
  const personData = await personFetch.json();
  return personData.name;
}

async function getFilmsData() {
  const dataRequest = await fetch('https://swapi.co/api/films/');
  const jsonData = await dataRequest.json();

  const cleanFilmData = jsonData.results.map( film => {
    const {title, opening_crawl, episode_id, release_date} = film;
    return {title, opening_crawl, episode_id, release_date} ;
  });

  return cleanFilmData;
}

async function getFavorites() {
  const checkLocalFavorites = 
  JSON.parse(
    localStorage.getItem('j1okzybFavorites')
  );

  const favorites = checkLocalFavorites 
    ? checkLocalFavorites
    : [];
  return favorites;
}

export default { getFilmsData, getVehicleData, getPlanetsData, getPeopleData, getFavorites };