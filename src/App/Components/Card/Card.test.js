import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import mockApiData from '../../mockApiResponse';
import { shallow } from 'enzyme';

describe('Card tests', () => {
  let renderedCard;
  let mockFunc;
  const peopleData = mockApiData.j1okzybPeople;
  const vehicleData = mockApiData.j1okzybVehicle;
  const mockData = peopleData[0];
  beforeEach(() => {
    mockFunc = jest.fn();
    renderedCard = shallow(
      <Card 
        cardData={mockData}
        iconType="icon-person"
        favoriteCard={mockFunc}
        starClass="icon-star" />
    );
  });

  it('should render the correct basic elements of a person card', () => {
    const expectedTableLength = 1;
    const expectedCardHeaderLength = 1;
    const expectedIconLength = 1;

    expect(renderedCard.find('table').length).toEqual(expectedTableLength);
    expect(renderedCard.find('.card-header').length).toEqual(expectedCardHeaderLength);
    expect(renderedCard.find('.icon-person').length).toEqual(expectedIconLength);
  });

  it('should render different version of the card when passed a vehicle instead', () => {
    renderedCard = shallow(
      <Card 
        cardData={vehicleData[0]}
        favoriteCard={mockFunc}
        iconType="icon-rocket"
        starClass="icon-star" />
    );
    const expectedVehicleIconLength = 1;
    const expectedPersonIconLength = 0;
    
    expect(renderedCard.find('.icon-person').length).toEqual(expectedPersonIconLength);
    expect(renderedCard.find('.icon-rocket').length).toEqual(expectedVehicleIconLength);
  }); 
});
