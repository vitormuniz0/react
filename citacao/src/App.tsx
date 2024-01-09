import React, { useState } from 'react';
import Header from './components/Molecules/header.tsx';
import Citacao from './components/Molecules/citacao.tsx';
import Nota from './components/Molecules/notas.tsx';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    </div>
  );
}
export default App;
