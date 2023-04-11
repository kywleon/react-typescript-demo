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
// import { User } from './state/User';
// import { Counter } from './state/Counter';
import { ThemeContextProvider } from './context/ThemeContext';
import { Box } from './context/Box';
import { UserContextProvider } from './context/UserContext';
import { User } from './context/User';
import { DomRef } from './ref/DomRef';
import { MutableRef } from './ref/MutableRef';
import Counter from './class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

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

      <Text as='h1' size='lg'>
        Heading
        </Text>
      <Text as="p" size='md'>
        Paragraph
        </Text>
      <Text as="label" htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>

      {/* <CustomComponent name='kywleon' isLoggedIn={false}/> */}

      {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
       Primary Button
      </CustomButton> */}
      {/* <Toast position='left-bottom' /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)
      }/>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)
      }/> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* <Counter message='The count value is'/>  */}

      {/* <DomRef />
      <MutableRef /> */}
      
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Counter /> */}
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
