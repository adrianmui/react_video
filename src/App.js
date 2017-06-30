import React, { Component } from 'react';
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </Router> 
    )
  }
}

export default App
