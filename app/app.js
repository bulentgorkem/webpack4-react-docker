import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

var other = _.concat(2, [3], [[4]]);

const Hello = props => (
  <div>
    {' '}
    Hello {props.name} <br /> {other}
  </div>
);

ReactDOM.render(<Hello name="John kjfgjkdfj" />, document.getElementById('root'));
