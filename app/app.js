import React from 'react';
import ReactDOM from 'react-dom';

const Hello = props => (
  <div>
    Hello {props.name} <br />
  </div>
);

ReactDOM.render(<Hello name="John Doe" />, document.getElementById('root'));
