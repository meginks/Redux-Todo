import React from 'react';
import TodoForm from './components/AddTodo';
import TodoList from './components/TodoList';


class TodoApp extends React.Component {
  constructor() {
    super();
  }

//   addTodo = e => {
//     e.preventDefault();

//     const newTodo = {
//       task: this.state.task, 
//       id: Date.now(),
//       completed: false
//     }; 
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//       task: "",
//       id: "",
//       completed: ""
//     }); 
//   };  

//   toggleCompleted = (id) => {
//     console.log("id: ", id);
//     this.setState ({
//       todos: this.state.todos.map(todo => {
//         if (id === todo.id) { 
//           return {...todo, completed: todo.completed === false ? true: false}; 
//         }
//         return todo;
//       })
//     });
//   };

//   clearCompleted = (e) => {
//     e.preventDefault();
//     this.setState({ todos: this.state.todos.filter(todo => !todo.completed)});
//   };

//   handleChanges = e => {
//     console.log(e.target.value);

//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

  render() {
    return (
      <div className="App">
        {/* <h2>To Do List</h2>
        <div className="todo-list">
        {/* {this.state.todos.map((todosFromMap, index) => (
         <Todo key={index} todo={todosFromMap} />
        ))} */}
        {/* <TodoList 
        todos = {this.state.todos}
        toggleCompleted={this.toggleCompleted}/> 
        <TodoForm 
        value={this.state.task}
        addTodo={this.addTodo}
        name={this.state.task}
        id={this.state.id}
        clearCompleted={this.clearCompleted}
        handleChanges={this.handleChanges}
        />
      </div> */} */}
    </div>
    )
  }
} 
export default TodoApp;