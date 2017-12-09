import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';


describe('Controls tests', () => {
  let renderedControls;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    renderedControls = mount(
      <MemoryRouter>
        <Controls 
          currentData="vehicles" 
          selectData={mockFunc} />
      </MemoryRouter>
    );
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Controls />
      </MemoryRouter>, div);
  });

  it('should render 3 buttons by default', () => {
    const expectedNumButtons = 3;

    expect(renderedControls.find('NavLink.Button').length).toEqual(expectedNumButtons);
  });
});