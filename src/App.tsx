// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  return (
    <div className="App">
      <Greet name={'Kwyleon'} messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;