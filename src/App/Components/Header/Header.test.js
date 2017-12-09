import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';


describe('Header tests', () => {
  let renderedHeader;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    renderedHeader = mount(
      <MemoryRouter>
        <Header 
          currentData="People"
          selectData={mockFn}
          numFavorites={3} />
      </MemoryRouter>);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
  });
  it('should render the correct default header elements', () => {
    const expectedH1Length = 1;
    const expectedButtonLength = 3;
    expect(renderedHeader.find('h1').length).toEqual(expectedH1Length);
    expect(renderedHeader.find('.Button').length).toEqual(expectedButtonLength);
  });
  it('should change the number of favorites inside the rendred button depending upon the number passed in via the favorites prop', () => {
    renderedHeader = mount(
      <MemoryRouter>
        <Header 
          currentData="People"
          selectData={mockFn}
          numFavorites={3} />
      </MemoryRouter>);
    const expectedButtonText = "favorites 3";
    expect(renderedHeader.find('.Button').at(2).text()).toEqual(expectedButtonText);
  });
});