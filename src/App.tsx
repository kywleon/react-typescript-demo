// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name={'Kwyleon'} messageCount={20} isLoggedIn={false}/>
    </div>
  );
}

export default App;
