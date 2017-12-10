/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme'; 
import mockApiData from '../../mockApiResponse';
const {
  j1okzybPeople: peopleData, 
  j1okzybPlanet: planetData, 
  j1okzybVehicle: vehicleData, 
  j1okzybFavorites: favorites} = mockApiData;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <CardContainer />
    </MemoryRouter>, div);
});

describe('card container tests', async () => {
  let renderedCardContainer;
  beforeEach(() => {
    renderedCardContainer = mount(
      <MemoryRouter>
        <CardContainer />
      </MemoryRouter>);
  });
  
  it('should render the placeholder component by default', () => {
    const expectedPlaceholderLength = 1;
    expect(renderedCardContainer
      .find('Placeholder').length)
      .toEqual(expectedPlaceholderLength);
  });

  it('should render the Favorites component when the router path is to Favorites', async () => {
    renderedCardContainer = await mount(
      <MemoryRouter initialEntries={['/favorites/']}>
        <CardContainer favorites={favorites} />
      </MemoryRouter>);
  });

  it('should render the People component when the router path is to Planets', async () => {
    renderedCardContainer = mount(
      <MemoryRouter initialEntries={['/people/']}>
        <CardContainer favorites={favorites} people={peopleData} />
      </MemoryRouter>);
    
    const expectedPeopleLength = 1;

    await expect(renderedCardContainer
      .find('People').length)
      .toEqual(expectedPeopleLength);
  });
  it('should render the vehicles component when the router path is to vehicles', async () => {
    renderedCardContainer = mount(
      <MemoryRouter initialEntries={['/vehicles/']}>
        <CardContainer favorites={favorites} vehicles={vehicleData} />
      </MemoryRouter>);
    
    const expectedVehiclesLength = 1;

    await expect(renderedCardContainer
      .find('Vehicles').length)
      .toEqual(expectedVehiclesLength);
  });
  it('should render the Planets component when the router path is to Planets', async () => {
    renderedCardContainer = mount(
      <MemoryRouter initialEntries={['/planets/']}>
        <CardContainer favorites={favorites} planets={planetData} />
      </MemoryRouter>);
    
    const expectedPlanetsLength = 1;

    await expect(renderedCardContainer
      .find('Planets').length)
      .toEqual(expectedPlanetsLength);
  });
});

