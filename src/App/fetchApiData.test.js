/* eslint-disable max-len */
import apiCalls from './fetchApiData';
import mockApiResponse from './mockApiResponse';
const {j1okzybFilms: filmData} = mockApiResponse;
import mockApiResponse2 from './mockApiResponse2';
const { 
  mockPlanetApiResponse,
  mockVehicleApiResponse, 
  mockPeopleApiResponse,
  mockSinglePlanetApiResponse, 
  mockSpeciesApiResponse, 
  mockSinglePersonApiResponse} = mockApiResponse2;
const { 
  getFilmsData, 
  getVehicleData, 
  getPlanetsData, 
  getPeopleData,
  fetchPersonData,
  fetchSpeciesData,
  fetchPlanetData } = apiCalls;

global.localStorage = {
  getItem: function(){ return null; },
  setItem: function(){}
};

describe('fetch films tests', () => {
  beforeEach(()=> {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: filmData}
        )
      }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/films/' 
    ];

    getFilmsData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);

  });
  it('returns a cleaned object if the promise is resolved', () => {
    const expectedResponse = filmData;
    expect(getFilmsData()).resolves.toEqual(expectedResponse);
  });
  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('Fetch failed in film fetch');
    const getVehicleDataRes = await getFilmsData();

    expect(getVehicleDataRes).toEqual(expectedError);
  });
});

describe('fetch people tests', () => {
  beforeEach(()=> {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockPeopleApiResponse.results}
        )
      }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/people/'
    ];

    getPeopleData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
  it('returns a cleaned object if the promise is resolved', () => {
    const expectedResponse = [{
      "homeworld": undefined, 
      "name": "Luke Skywalker", 
      "population": undefined, 
      "species": undefined
    }];
    expect(getPeopleData()).resolves.toEqual(expectedResponse);
  });
  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('Fetch failed in people fetch');
    const getVehicleDataRes = await getPeopleData();

    expect(getVehicleDataRes).toEqual(expectedError);
  });
});
describe('fetch vehicles tests', () => {
  beforeEach(()=> {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockVehicleApiResponse.results}
        )
      }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/vehicles/'
    ];
    getVehicleData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('returns a cleaned object if the promise is resolved', () => {
    const expectedResponse = [{
      "class": "wheeled", 
      "model": "Digger Crawler", 
      "name": "Sand Crawler", 
      "passengers": "30"
    }];

    expect(getVehicleData()).resolves.toEqual(expectedResponse);
  });
  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    const expectedError = Error('Fetch failed in vehicle fetch');
    const getVehicleDataRes = await getVehicleData();

    expect(getVehicleDataRes).toEqual(expectedError);
  });
});


describe('fetch planets tests', () => {
  beforeEach(()=> {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {results: mockPlanetApiResponse.results}
        )
      }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/planets/'
    ];

    getPlanetsData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
  it('returns a cleaned object if the promise is resolved', () => {
    const expectedResponse =  [{
      "class": undefined, 
      "model": undefined, 
      "name": "Alderaan", 
      "passengers": undefined
    }];
    expect(getVehicleData()).resolves.toEqual(expectedResponse);
  });

  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 200
      }));
    const expectedError = Error('Fetch failed in planet fetch');
    const getVehicleDataRes = await getPlanetsData();

    expect(getVehicleDataRes).toEqual(expectedError);
  });
  
});

describe('fetch single person tests', () => {
  beforeEach(()=> {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {name: mockSinglePersonApiResponse.name}
        )
      }));
  });

  it('fetch is called with the correct parameters', () => {
    const expected = [
      'https://swapi.co/people/1'
    ];

    fetchPersonData('https://swapi.co/people/1');

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('returns a cleaned object if the promise is resolved', async () => {
    const expectedReponse = "Wicket Systri Warrick";

    expect(await fetchPersonData('https://swapi.co/people/1')).toEqual(expectedReponse);
  });

  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 200
      }));
    
    const expectedError = Error('single person fetch failed');

    expect(await fetchPersonData('https://swapi.co/people/1')).toEqual(expectedError);
  });
});

describe('fetch species data tests', () => {
  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => mockSpeciesApiResponse
      }));
  });
  
  it('fetch is called with the correct default parameters', () => {
    const expectedParams = [
      'https://swapi.co/species/1'
    ];

    fetchSpeciesData('https://swapi.co/species/1');

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a cleaned object if the status is ok', async () => {
    const expectedResponse = {"average_height": "n/a", "average_lifespan": "indefinite", "classification": "artificial", "created": "2014-12-10T15:16:16.259000Z", "designation": "sentient", "edited": "2015-04-17T06:59:43.869528Z", "eye_colors": "n/a", "films": ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/7/", "https://swapi.co/api/films/5/"], "hair_colors": "n/a", "homeworld": null, "language": "n/a", "name": "Droid", "people": ["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/8/"], "skin_colors": "n/a", "url": "https://swapi.co/api/species/2/"};

    expect(await fetchSpeciesData('https://swapi.co/species/1')).toEqual(expectedResponse);
  });

  it('should throw an error when hitting the catch block in the fetch request', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    
    expect(await fetchSpeciesData('https://swapi.co/species/1')).toEqual(Error('Fetch failed in individual species fetch'));
  });
});

describe('single planet api fetch tests', () => {
  beforeEach(() => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.resolve({
        json: () => mockSinglePlanetApiResponse
      }));
  });

  it('should call the fetch with the correct params', () => {
    const expectedParams = [
      'https://swapi.co/planets/3'
    ];

    fetchPlanetData('https://swapi.co/planets/3');

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a planet object if the promise is resolved', async () => {
    const expectedResponse = {"climate": "temperate", "created": "2014-12-10T11:52:31.066000Z", "diameter": "12120", "edited": "2014-12-20T20:58:18.430000Z", "films": ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/"], "gravity": "1 standard", "name": "Naboo", "orbital_period": "312", "population": "4500000000", "residents": ["https://swapi.co/api/people/3/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/36/"], "rotation_period": "26", "surface_water": "12", "terrain": "grassy hills, swamps, forests, mountains", "url": "https://swapi.co/api/planets/8/"};

    expect(await fetchPlanetData('https://swapi.co/planets/3')).toEqual(expectedResponse);
  });

  it('should throw an error when hitting the catch block', async () => {
    window.fetch = 
      jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
    expect(await fetchPlanetData('https://swapi.co/planets/3')).toEqual(Error('Fetch failed in individual planet fetch'));
  });
});