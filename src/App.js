import React, { Component } from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Match } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import ShowCards from './showCards/showCards'
import jsonData from './data.json'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
          <Route path='/search/:id' component={
            props => {      
              const selectedShow = jsonData.shows.find(show => props.match.params.id === show.imdbID)
              return (
                <ShowCards show={selectedShow}/>
              )
            }
          } />
        </div>
      </Router> 
    )
  }
}

export default App
