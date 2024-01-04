import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import SearchCitacao from './components/Templates/SeachCitacao.tsx'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchCitacao/>
  </React.StrictMode>
);

