import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Incremental from './components/Incremental';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Components</h2>
        </div>

        <div className="App-intro">

          <p>Stateful Incremental (min, max, step)</p>
          <Incremental max={10} step={3} />

        </div>

      </div>
    );
  }

}

export default App;
