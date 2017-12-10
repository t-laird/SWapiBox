/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow } from 'enzyme';


describe('Button tests', () => {
  let renderedButton;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    
    renderedButton = shallow(
      <Button 
        icon="icon-star"
        favoriteCard={mockFunc}
        buttonClass="Button"
        type="Test Button"
      />
    );
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render the correct button components', () => {
    const expectedDivLength = 1;
    expect(renderedButton.find('div').length).toEqual(expectedDivLength);
  });

  it('should receive the correct class as passed via the buttonClass prop', () => {
    const expectedButtonClassLength = 1;
    expect(renderedButton.find('.Button').length).toEqual(expectedButtonClassLength);
  });

  it('should use the correct icon as passed via the icon prop', () => {
    const expectedIconClassLength = 1;
    expect(renderedButton.find('.icon-star').length).toEqual(expectedIconClassLength);
  });

  it('should have the text inside the button as passed via the type prop', () => {
    const expectedButtonText = "Test Button ";
    expect(renderedButton.text()).toEqual(expectedButtonText);
  });

  it('should call the function passed in to the button via the favoriteCard prop when favoriteCard is present', () => {
    const expectedFavCardFnCalls = 1;

    renderedButton.simulate('click');

    expect(mockFunc.mock.calls.length).toEqual(expectedFavCardFnCalls);
  });
});

