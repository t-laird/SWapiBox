import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mockApiResponse from './mockApiResponse';
import { shallow, mount } from 'enzyme';

global.localStorage = {
  getItem: function(query){ return JSON.stringify(mockApiResponse[query]); },
  setItem: function(){}
};

describe('App shallow tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should mount with the correct components', () => {
    const renderedApp = shallow(<App />);
  });
  

});
