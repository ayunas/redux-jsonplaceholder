import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';


class App extends Component {
  render() {
    return (
      <h1 className="App">
        <header className="App-header">
        <h1>Traversy</h1>
        <Posts/>
        </header>
      </h1>
    );
  }
}

export default App;