import React, { Component } from 'react';

import sample from './components/sample/sample';
import Sample2 from './components/sample2/sample2';

const factory1 = React.createFactory(sample);

const Landing = props => {
  return (
    <div>
      { factory1({desc: 'first sentence', color: 'red'}) }
      { factory1({desc: 'second sentence', color: 'blue'}) }
      { factory1({desc: 'third sentence', color: 'green'}) }
      <Sample2 desc="something different" color="black"/>
    </div>
  )
};

export default Landing;