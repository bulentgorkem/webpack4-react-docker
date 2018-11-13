import React from 'react';
import ReactDOM from 'react-dom';
import Identity from './components/Identity';
import css from './app.css';

const Hello = props => (
  <div>
    Hello
    <br />
    <Identity name="bulent" lastName="gorkem" />
    <div class="logo" />
  </div>
);

ReactDOM.render(<Hello />, document.getElementById('root'));
