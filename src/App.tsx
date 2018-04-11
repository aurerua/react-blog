import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class TodoForm extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
  }

  render() {
    return (
    <form className="mt-3">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="New Todo" aria-label="New Todo"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </form>);
  }
}

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">React Todo Tool</h1>
        </header>
        <TodoForm/>
      </div>
    </div>);
  }
}

export default App;
