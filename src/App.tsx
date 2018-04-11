import * as React from 'react';
import './App.css';
import TodoList from './todos/todo-list';

const logo = require('./logo.svg');

class App extends React.Component {
  
  render() {
    return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">React Todo Tool</h1>
        </header>
        <TodoList/>
      </div>
    </div>);
  }
}

export default App;
