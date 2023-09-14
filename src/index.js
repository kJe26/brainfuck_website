// custom components
import App from './App';
import reportWebVitals from './reportWebVitals';

// react libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './static/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
