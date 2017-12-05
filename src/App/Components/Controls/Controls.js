import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

const Controls = (props) => {

  return (
    <div className="Controls">
      <Button type="people" />
      <Button type="planets" />
      <Button type="vehicles" />
    </div>
  );
}

export default Controls;