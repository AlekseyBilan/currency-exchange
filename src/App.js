import React, { Component } from 'react';
import './App.css';
import currencies from './currencies'
import Ticker from "./Ticker/Ticker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
              {this.getHtml()}
          </ul>
        </aside>
      </div>
    );
  }
  getHtml(){
      return currencies.map( (curr, index) => (<li key={index} className='ticker'><Ticker curr = {curr}/></li>));
  }
}

export default App;
