import React from 'react';
import './App.css';
import Calculator from './components/calculator/Calculator'

class App extends React.Component {

  render(){

    let rows = [
      ["ON", "OFF", "%", "."],
      ["+", "-", "*", "/"],
      ["1", "2", "3", "4"],
      ["5", "6", "7", "8"],
      ["9", "0", "C", "="]
     
  ];
    return (
      <div className="App">
          <Calculator rows={rows} />
      </div>
    );
  }
  
}

export default App;
