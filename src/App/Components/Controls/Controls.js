import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

const Controls = (props) => {

  return (
    <div className="Controls">
      <Button type="people" icon="icon-person"/>
      <Button type="planets" icon="icon-globe" />
      <Button type="vehicles" icon="icon-rocket" />
    </div>
  );
}

export default Controls;