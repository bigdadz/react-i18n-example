import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
      </header>
    </div>
  );
}

export default App;
