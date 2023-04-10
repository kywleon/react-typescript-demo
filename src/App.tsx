// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import { Button } from './components/Button';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';
import { Counter } from './state/Counter';


function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">

      <Counter />
      {/* <User /> */}
      {/* <LoggedIn /> */}
      

      {/* <Container styles={{ border: '1px solid black' , padding: '1rem'  }}/> */}
      
      {/* <Button handleClick={(event , id) => {
        console.log('Button Clicked' , event , id)
      }
      }/>
      <Input value='' handleChange={event => console.log(event)} /> */}

      {/* <Status status='loading'/>
      <Heading>
         Placeholder text
      </Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name={'Kwyleon'} isLoggedIn={true}/> */}
      {/* <Greet name={'Kwyleon'} messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
    </div>
  );
}

export default App;
