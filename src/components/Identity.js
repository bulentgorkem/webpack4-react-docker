import React from 'react';
import css from './identity.css';

const Identity = props => (
  <div>
    First Name: {props.name} <br />
    Last Name: {props.lastName}
  </div>
);

export default Identity;
