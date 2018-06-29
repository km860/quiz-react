import React, { Component } from 'react';
import './App.css';
import QuizList from './containers/QuizList/QuizList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizList />
      </div>
    );
  }
}

export default App;
