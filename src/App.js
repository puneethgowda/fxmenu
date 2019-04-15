import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import Type1 from './pages/type1'
import Type2 from './pages/type2'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Type 1</Link>
              </li>
              <li>
                <Link to="/type2">Type 2</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Type1} />
            <Route path="/type2" component={Type2} />
          </div>
       </Router>
      </div>
    );
  }
}

export default App;
