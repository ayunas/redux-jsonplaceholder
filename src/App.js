import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';


class App extends Component {
  render() {
    return (
      <h1 className="App">
        <header className="App-header">
        <h1>Traversy</h1>
        <PostForm/>
        <Posts/>
        </header>
      </h1>
    );
  }
}

export default App;

