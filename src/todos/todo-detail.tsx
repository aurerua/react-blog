import * as React from 'react';
import TodoForm from './todo-form';
import Todo from './todo';

interface TodoDetailProps {
  todo: Todo;
  onTodoChange: Function;
  // depth: number;
}

enum TodoDetailMode {Edit, Display}

interface TodoDetailState {
  mode: TodoDetailMode;
}

/**
 * The TodoDetail class is used to display a todo.
 */
export default class TodoDetail extends React.Component<TodoDetailProps, TodoDetailState> {
  
  constructor(props: TodoDetailProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      mode: TodoDetailMode.Display,
    };
  }

  /**
   * Propagate a change in the todo to the parent Component. 
   */
  handleChange(todo: Todo|null) {
    this.props.onTodoChange(todo);
  }

  /**
   * Toggle edit mode.
   */
  toggleEditMode = (e: any) => {
   this.setState({mode: TodoDetailMode.Edit});  
  }

  /**
   * Toggle display mode.
   */  
  toggleDisplayMode = () => {
    this.setState({mode: TodoDetailMode.Display});  
  }
    
  /**
   * Delete the todo.
   */
  deleteTodo = () => { this.handleChange(null); };
  
  /**
   * Change the todo's title
   */
  changeTitle = (newTitle: string) => {
    const newTodo = {title: newTitle, todos: this.props.todo.todos};
    this.handleChange(newTodo);
    this.toggleDisplayMode();
  }
  
  /**
   * render the title in display mode.
   */
  renderDisplayTitle = () => {
    return (
      <div className="d-flex justify-content-between">
        <h5>{this.props.todo.title}</h5>
        <div>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.toggleEditMode}>Edit</button>
          <button type="button" className="btn btn-danger btn-sm ml-1" onClick={this.deleteTodo}>Delete</button>
        </div>
      </div>
    );
  }
  
  /**
   * render the title in edit mode.
   */
  renderEditTitle = () => (
    <TodoForm 
     value={this.props.todo.title} 
     buttonValue="Save"
     callbackFromParent={this.changeTitle}
    />
  )
  
  render() {
    return (
    <div className="card">
      <div className="card-header">
          {this.state.mode === TodoDetailMode.Display && this.props.todo.title.length > 0 ?
          this.renderDisplayTitle() :
          this.renderEditTitle()}
        </div>
      <div className="card-body">
        <p className="card-text text-muted"> Here will come a list of sub-Todos...</p>
      </div>
    </div>
  );
  }
}
