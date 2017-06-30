import React, { Component } from 'react';

const ShowCards = props => {
  // const style = { color: props.color }
  const { title, year, description } = props.show

  const showCardStyle = {
    border: '1px solid black',
    width: '45%',
    margin: '0 3% 1% 0'
  }

  return (
    <div style={showCardStyle}>
      <div>
        <h3>{title} </h3>
        <h4>{year}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ShowCards
