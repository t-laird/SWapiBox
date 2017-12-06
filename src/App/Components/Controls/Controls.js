import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

const Controls = (props) => {

  return (
    <div className="Controls">
      <Button selectData={props.selectData} type="people" icon="icon-person"/>
      <Button selectData={props.selectData} type="planets" icon="icon-globe" />
      <Button selectData={props.selectData} type="vehicles" icon="icon-rocket" />
    </div>
  );
}

export default Controls;