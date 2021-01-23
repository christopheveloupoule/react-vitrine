import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import { BrownserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

