import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  console.log('here');
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
