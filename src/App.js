import React, { Component } from 'react';
import { Router } from '@reach/router';
import './css/App.css';
import About from './components/About';
import Demos from './components/Demos';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about/" />
          <Demos path="/demos/" />
          <Contact path="contact" />
        </Router>
      </div>
    );
  }
}

export default App;
