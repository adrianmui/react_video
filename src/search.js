import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ShowCards from './showCards/showCards'

import staticData from './data.json'

const jsonStyle = {
  textAlign: 'left'
}

const Search = () => {
  return (
    <div style={ jsonStyle }>
      <Link to='/'>Home</Link>
      <ul>
          {
            staticData.shows.map( show => (
                <ShowCards show={show}/>
              )
            )
          }
      </ul>
    </div>
  )
}

export default Search;