import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const ShowCards = props => {
  // const style = { color: props.color }
  const { title, year, description, poster, imdbID } = props.show

  const image = require(`./../img/posters/${poster}`)

  const showCardStyle = {
    display: 'inline-table',
    border: '1px solid black',
    width: '48%',
    height: '200px',
  }

  const imageStyle = {
    width: '20%',
    float: 'left'
  }

  const textStyle = {
    position: 'relative'
  }

  return (
    <div style={showCardStyle}>
      <img src={image} style={imageStyle} alt=''/>
      <div style={textStyle}>
        <h3><Link to={`/details/${imdbID}`}>{title}</Link>:{imdbID} </h3>
        <h4>{year}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

ShowCards.PropTypes = {
  show: PropTypes.object
}

export default ShowCards
