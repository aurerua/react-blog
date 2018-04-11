import * as React from 'react';
import TodoForm from '../todos/todo-form';

export default class TodoList extends React.Component {
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
      <TodoForm />
    );
  }
}
