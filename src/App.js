import React from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator'

class App extends React.Component {

  render(){

    return (
      <div className="App">
          <Calculator />
      </div>
    );
  }
  
}

export default App;
