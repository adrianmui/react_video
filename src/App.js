import React, { Component } from 'react';
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import landing from './landing';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={landing} />
        </div>
      </Router> 
    )
  }
}

export default App
