import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

const Controls = (props) => {
  const vehiclesSelected = props.currentData === 'vehicles';
  const planetsSelected = props.currentData === 'planets';
  const peopleSelected = props.currentData === 'people';
  
  const vehicleClass = vehiclesSelected ? "Button selected" : "Button";
  const planetClass = planetsSelected ? "Button selected" : "Button";
  const peopleClass = peopleSelected ? "Button selected" : "Button";

  return (
    <div className="Controls">
      <Button buttonClass={peopleClass} selectData={props.selectData} type="people" icon="icon-person"/>
      <Button buttonClass={planetClass} selectData={props.selectData} type="planets" icon="icon-globe" />
      <Button buttonClass={vehicleClass} selectData={props.selectData} type="vehicles" icon="icon-rocket" />
    </div>
  );
}

export default Controls;