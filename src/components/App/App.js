import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import QuestionTwo from '../QuestionTwo/QuestionTwo.js';
import QuestionThree from '../QuestionThree/QuestionThree.js';
import QuestionFour from '../QuestionFour/QuestionFour.js';
import QuestionFive from '../QuestionFive/QuestionFive.js';
import Admin from '../Admin/Admin.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/2" component={QuestionTwo} />
          <Route path="/3" component={QuestionThree} />
          <Route path="/4" component={QuestionFour} />
          <Route path="/5" component={QuestionFive} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
