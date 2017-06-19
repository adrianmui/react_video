import React, { Component } from 'react';

const div = React.DOM.div;
const h1 = React.DOM.h1;

const sample = React.createClass({
  render: function() {
    return (
      div(null,
        h1({style: { color: this.props.color }}, this.props.desc))
    )
  }
});

export default sample;

