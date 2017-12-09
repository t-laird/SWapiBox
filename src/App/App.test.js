import React from 'react';
import ReactDOM from 'react-dom';
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
    renderedApp = mount(<App />);
  });
  
  it('should instantiate the correct components', () => {
    renderedApp.setState({filmData: mockApiResponse.filmData})
    console.log(renderedApp.debug());
  });
  

});
