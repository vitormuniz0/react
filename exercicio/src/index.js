import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Input from './Input';
import withToggle from './withToggle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Input/>
  </React.StrictMode>
);
