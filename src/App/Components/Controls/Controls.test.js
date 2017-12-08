import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { shallow } from 'enzyme';


describe('Controls tests', () => {
  let renderedControls;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    renderedControls = shallow(
      <Controls 
        currentData="vehicles" 
        selectData={mockFunc} />
    );
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
  });

  it('should render 3 buttons by default', () => {
    const expectedNumButtons = 3;

    expect(renderedControls.find('Button').length).toEqual(expectedNumButtons);
  });

  it('should change the button class for vehicles to "Button selected" when passed vehicles via the currentData prop', () => {
    const expectedSelectedButton = 'Button selected';
    renderedControls = shallow(
      <Controls 
        currentData="vehicles" 
        selectData={mockFunc} />
    );
    
    expect(renderedControls.find('Button').at(2).props().buttonClass).toEqual(expectedSelectedButton);
  });

});