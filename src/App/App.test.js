/* eslint-disable max-len */
import React from 'react';
import App from './App';
import mockApiResponse from './mockApiResponse';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

global.localStorage = {
  getItem: function(query){ return JSON.stringify(mockApiResponse[query]); },
  setItem: function(){}
};

describe('App shallow tests', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should initially render the loading component', () => {
    const expectedLoadingLength = 1;
    const expectedAppLength = 0;

    expect(renderedApp.find('.Loading').length).toEqual(expectedLoadingLength);
    expect(renderedApp.find('.App').length).toEqual(expectedAppLength);
  });

  it('should render the app component after getting time to load in the necessary data', () => {
    const expectedLoadingLength = 0;
    const expectedAppLength = 1;
    
    renderedApp.update();

    expect(renderedApp.find('.Loading').length).toEqual(expectedLoadingLength);
    expect(renderedApp.find('.App').length).toEqual(expectedAppLength);
  });

  it('should render with the correct default before the initial fetch is performed', () => {
    const expectedState = {
      filmData: [],
      vehicles: [],
      people: [],
      planets: [],
      favorites: []
    };

    renderedApp = shallow(<App />);

    expect(renderedApp.state()).toEqual(expectedState);
  });

  it('should update the state with filmData after the componentDidMount is run', () => {
    const expectedFilmsLength = 7;
    
    renderedApp.update();

    expect(renderedApp.state('filmData').length).toEqual(expectedFilmsLength);
  });

  it('should update the state with favorites if there are any in local storage', () => {
    const expectedFavoritesLength = 3;

    expect(renderedApp.state('favorites').length).toEqual(expectedFavoritesLength);
  });

  it('should not add anything to favorites if there is nothing in favorites', () => {
    global.localStorage = {
      getItem: function () { return null; }
    };
    const expectedFavorites = [];

    renderedApp=shallow(<App />);

    expect(renderedApp.state('favorites')).toEqual(expectedFavorites);
  });

  it('should fetch the data for vehicles when one of those categories is selected if there is not data there by default', async () => {
    global.localStorage = {
      getItem: function(query){ return JSON.stringify(mockApiResponse[query]); },
      setItem: function(){}
    };

    expect(renderedApp.state('vehicles').length).toEqual(0);
    await renderedApp.instance().selectDataType('vehicles');
    
    await expect(renderedApp.state('vehicles').length).toEqual(10);
  });

  it('should fetch the data for people when one of those categories is selected if there is not data there by default', async () => {
    expect(renderedApp.state('people').length).toEqual(0);
    await renderedApp.instance().selectDataType('people');
    
    expect(renderedApp.state('people').length).toEqual(10);
  });

  it('should fetch the data for planets when one of those categories is selected if there is not data there by default', async () => {
    expect(renderedApp.state('planets').length).toEqual(0);
    await renderedApp.instance().selectDataType('planets');
    
    expect(renderedApp.state('planets').length).toEqual(10);
  });

  it('should add a card to favorites when the favoriteCard function is called', () => {
    const mockCard = { name: "Sand Crawler", model: "Digger Crawler", class: "wheeled", passengers: "30" };
    const expectedDefaultFavoritesLength = 3;
    const expectedFavoritesLength = 4;
    
    expect(renderedApp.state('favorites').length).toEqual(expectedDefaultFavoritesLength);
    renderedApp.instance().favoriteCard('meh', mockCard);

    expect(renderedApp.state('favorites').length).toEqual(expectedFavoritesLength);
    expect(renderedApp.state('favorites')[3]).toEqual(mockCard);
  });
});


describe('App mount tests', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = mount(<MemoryRouter><App /></MemoryRouter>);
  });

  it('should render the proper underlying components', () => {
    const expectedFilmTextLength = 1;
    const expectedHeaderLength = 1;
    const expectedControlsLength = 1;
    const expectedCardContainerLength = 1;

    renderedApp.update();

    expect(renderedApp.find('.FilmText').length).toEqual(expectedFilmTextLength);
    expect(renderedApp.find('Header').length).toEqual(expectedHeaderLength);
    expect(renderedApp.find('Controls').length).toEqual(expectedControlsLength);
    expect(renderedApp.find('CardContainer').length).toEqual(expectedCardContainerLength);
  });

  it('should render the placeholder component by default in the card container', ()=> {
    const expectedPlaceholderLength = 1;
    renderedApp.update();
    expect(renderedApp.find('Placeholder').length).toEqual(expectedPlaceholderLength);
  });


});


  