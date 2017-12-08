import React from 'react';
import './Card.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Card = (props) => {
  const personTable = props.cardData.homeworld ? (
    <tbody>
      <tr>
        <td className="key-highlight">Species:</td>
        <td>{props.cardData.species}</td>
      </tr>
      <tr>
        <td className="key-highlight">Homeworld:</td>
        <td>{props.cardData.homeworld}</td>
      </tr>
      <tr>
        <td className="key-highlight">Population of Homeworld:</td>
        <td>{props.cardData.population}</td>
      </tr>
    </tbody>
  ) : null;

  const planetTable = props.cardData.terrain? (
    <tbody>
      <tr>
        <td className="key-highlight">Terrain:</td>
        <td>{props.cardData.terrain}</td>
      </tr>
      <tr>
        <td className="key-highlight">Population:</td>
        <td>{props.cardData.population}</td>
      </tr>
      <tr>
        <td className="key-highlight">Climate:</td>
        <td>{props.cardData.climate}</td>
      </tr>
      <tr>
        <td className="key-highlight">Notable Residents: </td>
        <td>{props.cardData.residents}</td>
      </tr>
    </tbody>
  ) : null;

  const vehicleTable = props.cardData.class ? (
    <tbody>
      <tr>
        <td className="key-highlight">Model:</td>
        <td>{props.cardData.model}</td>
      </tr>
      <tr>
        <td className="key-highlight">Class:</td>
        <td>{props.cardData.class}</td>
      </tr>
      <tr>
        <td className="key-highlight">No. Passengers:</td>
        <td>{props.cardData.passengers}</td>
      </tr>
    </tbody>
  ) : null;

  return (
    <div className="Card">
      <div className="card-container">
        <div className="card-header">
          <i className="icon-person"></i>
          <h2>{props.cardData.name}</h2>
          <Button 
            buttonClass="Button" 
            icon={props.starClass} 
            favoriteCard={props.favoriteCard}
            card={props.cardData} />
        </div>
        <table>
          {personTable}
          {planetTable}
          {vehicleTable}
        </table>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardData: PropTypes.object,
  starClass: PropTypes.string,
  favoriteCard: PropTypes.func
};