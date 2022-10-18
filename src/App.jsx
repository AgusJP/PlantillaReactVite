import React from 'react';
import Container from './components/Container';
import ESLint from './components/ESLint';
import Prettier from './components/Prettier';
import './styles/app.css';

function App() {
  return (
    <>
      <Container />
      <div className='content'>
        <ESLint />
        <Prettier />
      </div>
    </>
  );
}

export default App;
