import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import About from './views/about/About';
import Schedule from './views/schedule/Schedule';
import Resources from './views/resources/Resources';

import {Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={About} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/resources" component={Resources} />
      </div>
    );
  }
}

export default App;
