import React from 'react';
import ReactDOM from 'react-dom';
import FilmText from './FilmText';
import { shallow } from 'enzyme';
import mockApiData from '../../mockApiResponse';


describe('FilmText tests', () => {
  let renderedFilmText;
  const filmData = mockApiData.j1okzybFilms;

  beforeEach(() => {
    renderedFilmText = shallow(<FilmText filmData={filmData} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilmText filmData={filmData} />, div);
  });

  it('should render the correct containing divs for various filmText data', () => {
    const expectedLogoContainerLength = 1;
    const expectedTextContainerLength = 1;

    expect(renderedFilmText.find('.logo-container').length).toEqual(expectedLogoContainerLength);
    expect(renderedFilmText.find('.text-container').length).toEqual(expectedTextContainerLength);
  });

  it('should correctly split the opening crawl text into an array with 3 items', () => {
    const expectedTextArrayLength = 3; //ahhhh fix the film w/ 4 paragraphs :'(
    expect(renderedFilmText.state('filmText').length).toEqual(expectedTextArrayLength);
  });

  it('should set the state with the data returned in componentDidMount', ()=> {
    const convertNumeralToNum = {
      'I': 2,
      'II': 1,
      'III': 3,
      'IV': 0,
      'V': 5,
      'VI': 4,
      'VII': 6
    };

    const selectedFilm = renderedFilmText.state('numeral');
    const convertedToNum = convertNumeralToNum[selectedFilm];

    const randomFilm = filmData[convertedToNum];


    expect(renderedFilmText.state('filmYear')).toEqual(randomFilm.release_date);
    expect(renderedFilmText.state('filmName')).toEqual(randomFilm.title);  
  });
});