import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import sample from './shared/sample/sample';
import Sample2 from './shared/sample2/sample2';

import Search from './search';

// const factory1 = React.createFactory(sample);

const Landing = props => {
  return (
    <div>
      <Route path='/search' component={Search}/>

      <h1> Our Videos </h1>
      <input type='text' placeholder='type text here'/>
      <Link to='/search'>Search</Link>

      {/*{ factory1({desc: 'first sentence', color: 'red'}) }*/}
      <Sample2 desc="something different" color="#f3f3f3"/>
    </div>
  )
};

export default Landing;