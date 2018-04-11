import * as React from 'react';
import TodoDetail from './todo-detail';
import Todo from './todo';
import TodoForm from './todo-form';

interface TodosState {
  todos: Todo[];
}

interface TodosProps {
  maxDepth: number;
}

/**
 * The Todos class is used as a wrapper for the Todos list. It displays an input 
 * to add a Todo and the list of todos.
 */
export default class TodoList extends React.Component<TodosProps, TodosState> {
  
  constructor(props: TodosProps) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  
  /**
   * Adds a Todo at the beginning of the todos Array
   * @param {[type]} todo [description]
   */
  addTodo = (value: string) => {
    const oldTodos = this.state.todos;
    this.setState({todos: [new Todo(value), ...oldTodos]});
  }

  /**
   * Change a todo at the passed index. If the passed todo is null, it removes 
   * it from the Array of Todos.
   */
  changeTodo = (index: number) => (todo: Todo) => {
    const before = this.state.todos.slice(0, index);
    const after = this.state.todos.slice(index + 1);
    
    if (todo != null) {
      const newTodos = [...before, todo, ...after];
      this.setState({todos: newTodos});
    } else {
      const newTodos = [...before, ...after];
      this.setState({todos: newTodos});
    }
  }

  render() {
    const todos = this.state.todos;
    
    // Allowed depth for children to be decreased until 0 after which no child 
    // can be created. @TODO
    // const depth = this.props.maxDepth;
    const changeTodo = this.changeTodo;
    
    return (
      <div>
        <TodoForm callbackFromParent={this.addTodo}/>
        <ul className="list-unstyled">
        {todos.map( function(todo: Todo, index: number) {
          return <li key={index} className="mb-2">
          <TodoDetail 
            todo={todo} 
            onTodoChange={changeTodo(index)}
          />
          </li>; }
        )}
        </ul>
      </div>
    );
  }
}
