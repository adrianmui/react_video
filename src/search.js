import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ShowCards from './showCards/showCards'

import staticData from './data.json'

const jsonStyle = {
  textAlign: 'left'
}

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ``
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value })
  }
  
  render() { 
    return (
    <div style={ jsonStyle }>
      <Link to='/'>Home</Link>
      
      <header>
        <h1> {this.state.searchTerm} </h1>
        <input type="text" onChange={this.handleSearchTermChange} value={this.state.searchTerm} placeholder="Search"/>
      </header>
      
      <ul>
          {
            staticData.shows
              .filter( show => `${show.title} ${show.description}`.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
              .map( show => (
                <ShowCards show={show}/>
              )
            )
          }
      </ul>
    </div>
    )
  }
}

export default Search;