import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
// import { Component } from 'react';

function App() {  
  return(
    <div>
    <h1>Styling using Functional and Class Components</h1>
      <div className='boxes'>
        <FunctionalComponent/>
        <ClassComponent/>
      </div>
    </div>
  )
}

export default App;
