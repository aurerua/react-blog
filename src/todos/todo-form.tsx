import * as React from 'react';

interface TodoFormProps {
  value?: string;  
  buttonValue?: string;
  callbackFromParent: Function;
}

interface TodoFormState {
  value: string;  
}

/**
 * The class TodoForm is used to create/edit a todo.
 * @type {[type]}
 */
export default class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Keep the state in sync with the value in the input.
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  /**
   * Propagate the changes to the parent Component.
   */
  handleSubmit(event: any) {
    const val = this.state.value;
    if (val.length > 0) {
      this.props.callbackFromParent(this.state.value);
      this.setState({value: ''});
    }
    event.preventDefault();
  }

  render() {
    return (
    <form className="mt-3" onSubmit={this.handleSubmit}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control"
          placeholder="New Todo" 
          aria-label="New Todo" 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <input className="btn btn-outline-secondary" type="submit" value={this.props.buttonValue || 'Add'} />
        </div>
      </div>
    </form>);
  }
}
