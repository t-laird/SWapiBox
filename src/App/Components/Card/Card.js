import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {

  const personCard = props.person ? (
    <div className="card-container">
      <div className="card-header">
        <i className="icon-person"></i>
        <h2>{props.person.name}</h2>
        <Button buttonClass="Button" icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.person}/>
      </div>
      <table>
      <tbody>
        <tr>
          <td className="key-highlight">Species:</td>
          <td>{props.person.species}</td>
        </tr>
        <tr>
          <td className="key-highlight">Homeworld:</td>
          <td>{props.person.homeworld}</td>
        </tr>
        <tr>
          <td className="key-highlight">Population of Homeworld:</td>
          <td>{props.person.population}</td>
        </tr>
      </tbody>
      </table>
    </div>
  ) : null;

  const planetCard = props.planet? (
    <div className="card-container">    
      <div className="card-header">
        <i className="icon-globe"></i>
        <h2>{props.planet.name}</h2>
        <Button buttonClass="Button" icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.planet}/>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="key-highlight">Terrain:</td>
            <td>{props.planet.terrain}</td>
          </tr>
          <tr>
            <td className="key-highlight">Population:</td>
            <td>{props.planet.population}</td>
          </tr>
          <tr>
            <td className="key-highlight">Climate:</td>
            <td>{props.planet.climate}</td>
          </tr>
          <tr>
            <td className="key-highlight">Notable Residents: </td>
            <td>{props.planet.residents}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : null;

  const vehicleCard = props.vehicle ? (
    <div className="card-container">    
      <div className="card-header">
        <i className="icon-rocket"></i>
        <h2>{props.vehicle.name}</h2>
        <Button buttonClass="Button" icon="icon-star-empty" favoriteCard={props.favoriteCard} card={props.vehicle}/>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="key-highlight">Model:</td>
            <td>{props.vehicle.model}</td>
          </tr>
          <tr>
            <td className="key-highlight">Class:</td>
            <td>{props.vehicle.class}</td>
          </tr>
          <tr>
            <td className="key-highlight">No. Passengers:</td>
            <td>{props.vehicle.passengers}</td>
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