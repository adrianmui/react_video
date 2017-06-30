import React from 'react'

const Sample2 = props => {
  const style = { color: props.color }

  return (
    <div>
      <h1 style={ style }>
        { props.desc }
      </h1>
    </div>
  )
}

export default Sample2
