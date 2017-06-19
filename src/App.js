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
        h1(null, 'something is here'))
    )
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        

        { React.createElement(component1, null) }
        { React.createElement(component1, null) }
        { React.createElement(component1, null) }
      </div>
    );
  }
}

export default App;




