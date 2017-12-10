import apiCalls from './fetchApiData';
import mockApiResponse from './mockApiResponse';
const {j1okzybFilms: filmData} = mockApiResponse;
import mockApiResponse2 from './mockApiResponse2';
const { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse} = mockApiResponse2;
const { getFilmsData, getVehicleData, getPlanetsData, getPeopleData } = apiCalls;

global.localStorage = {
  getItem: function(query){ return null},
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
      'https://swapi.co/api/films/', 
    ];

    getFilmsData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);

  });
  it('returns a cleaned object if the status code is ok', () => {
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
      'https://swapi.co/api/people/', 
    ];

    getPeopleData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
  it('returns a cleaned object if the status code is ok', () => {
    const expectedResponse = [{"homeworld": undefined, "name": "Luke Skywalker", "population": undefined, "species": undefined}];
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
      }))
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/vehicles/', 
    ];
    getVehicleData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('returns a cleaned object if the status code is ok', () => {
    const expectedResponse = [{"class": "wheeled", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30"}];
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
      }))
  });

  it('fetch is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/planets/', 
    ];

    getPlanetsData();

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
  it('returns a cleaned object if the status code is ok', () => {
    const expectedResponse =  [{"class": undefined, "model": undefined, "name": "Alderaan", "passengers": undefined}];
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