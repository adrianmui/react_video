import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const div = React.DOM.div;
const h1 = React.DOM.h1;

const component1 = React.createClass({
  render: function() {
    return (
      div(null,
        h1(null, this.props.desc))
    )
  }
});

const factory1 = React.createFactory(component1);

class App extends Component {
  render() {
    return (
      <div className="App">
        { factory1({desc: 'first sentence'}) }
        { factory1({desc: 'second sentence'}) }
        { factory1({desc: 'third sentence'}) }
      </div>
    );
  }
}

export default App;




