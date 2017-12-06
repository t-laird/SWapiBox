import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {
  const personCard = props.cardData.homeworld ? (
    <div className="card-container">
      <div className="card-header">
        <i className="icon-person"></i>
        <h2>{props.cardData.name}</h2>
        <Button buttonClass="Button" icon={props.starClass} favoriteCard={props.favoriteCard} card={props.cardData}/>
      </div>
      <table>
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
      </table>
    </div>
  ) : null;

  const planetCard = props.cardData.terrain? (
    <div className="card-container">    
      <div className="card-header">
        <i className="icon-globe"></i>
        <h2>{props.cardData.name}</h2>
        <Button buttonClass="Button" icon={props.starClass} favoriteCard={props.favoriteCard} card={props.cardData}/>
      </div>
      <table>
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
      </table>
    </div>
  ) : null;

  const vehicleCard = props.cardData.class ? (
    <div className="card-container">    
      <div className="card-header">
        <i className="icon-rocket"></i>
        <h2>{props.cardData.name}</h2>
        <Button buttonClass="Button" icon={props.starClass} favoriteCard={props.favoriteCard} card={props.cardData}/>
      </div>
      <table>
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
      </table>
    </div>
  ) : null;

  return (
    <div className="Card">
      {personCard}
      {planetCard}
      {vehicleCard}
    </div>
  );
}

export default Card;