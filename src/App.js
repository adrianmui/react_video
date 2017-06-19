import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import sample from './components/sample/sample';

const factory1 = React.createFactory(sample);

class App extends Component {
  render() {
    return (
      <div className="App">
        { factory1({desc: 'first sentence', color: 'red'}) }
        { factory1({desc: 'second sentence', color: 'blue'}) }
        { factory1({desc: 'third sentence', color: 'green'}) }
      </div>
    );
  }
}

export default App;




