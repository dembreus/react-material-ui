import React, { Component } from 'react';
// import logo from './planet.png';
import './App.css';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            {/*<div className="App">*/}
            {/*<header className="App-header">*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*</header>*/}
            {/*<p className="App-intro">*/}
            {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*</div>*/}
            <CourseList/>
        </div>

    );
  }
}

export default App;
