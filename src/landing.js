import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import sample from './shared/sample/sample';
import Sample2 from './shared/sample2/sample2';

const factory1 = React.createFactory(sample);

const User = () => {
  return (
    <h1>search for stuff</h1>
  )
}

const Landing = props => {
  return (
    <div>
      <Route path="/search" component={User}/>

      <Link to='/search'>Search</Link>

      { factory1({desc: 'first sentence', color: 'red'}) }
      { factory1({desc: 'second sentence', color: 'blue'}) }
      { factory1({desc: 'third sentence', color: 'green'}) }
      <Sample2 desc="something different" color="black"/>
    </div>
  )
};

export default Landing;