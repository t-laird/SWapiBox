import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow, mount } from 'enzyme';


describe('Header tests', () => {
  let renderedHeader;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    renderedHeader = shallow(
      <Header 
        currentData="People"
        selectData={mockFn}
        numFavorites={3} />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
  it('should render the correct default header elements', () => {
    const expectedH1Length = 1;
    const expectedButtonLength = 1;

    expect(renderedHeader.find('h1').length).toEqual(expectedH1Length);
    expect(renderedHeader.find('Button').length).toEqual(expectedButtonLength);
  });
  it('should change the number of favorites inside the rendred button depending upon the number passed in via the favorites prop', () => {
    renderedHeader = mount(
      <Header 
        currentData="People"
        selectData={mockFn}
        numFavorites={3} />);
    const expectedButtonText = "View Favorites  3";
    expect(renderedHeader.find('Button').text()).toEqual(expectedButtonText);
  });
});