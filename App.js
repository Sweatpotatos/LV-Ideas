import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './App.css'; // This should be here to apply styles

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;