import React from 'react';
import ReactDOM from 'react-dom';
import FilmText from './FilmText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilmText />, div);
});