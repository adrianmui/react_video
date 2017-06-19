import React, { Component } from 'react';
import './App.css'

import sample from './components/sample/sample';
import Sample2 from './components/sample2/sample2';

const factory1 = React.createFactory(sample);

class App extends Component {
  render () {
    return (
      <div className='App'>
        { factory1({desc: 'first sentence', color: 'red'}) }
        { factory1({desc: 'second sentence', color: 'blue'}) }
        { factory1({desc: 'third sentence', color: 'green'}) }
        <Sample2 desc="something different" color="black"/>
      </div>
    )
  }
}

export default App
