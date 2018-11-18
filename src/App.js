import React, { Component } from 'react';
import TickerList from "./Ticker/TickerList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
            <TickerList/>
        </aside>
      </div>
    );
  }
}

export default App;
