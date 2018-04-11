/**
 * This class defines a Todo.
 * @type {[type]}
 */
export default class Todo {
  title: string;
  todos: Todo[];
  
  constructor(title: string = '') {
    this.title = title;
    this.todos = [];
  }   
}
