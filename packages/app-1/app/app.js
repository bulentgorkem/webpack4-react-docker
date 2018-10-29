import React from 'react';
import ReactDOM from 'react-dom';
import foo from 'library-1';

const Hello = props => (
  <div>
    Hello {props.name} <br />
  </div>
);

foo();

ReactDOM.render(<Hello name="John Doe" />, document.getElementById('root'));
