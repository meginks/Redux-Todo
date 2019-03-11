import React, { Component } from 'react';
import './App.css';

const TodoList = () => {
  return (
    <div>
      To Do List will go here
    </div>
  )
}

const AddTodoForm = () => {
  return (
  <div>
    <form>
      <input type="text" />
      <button type="submit">add to do</button>
    </form>
  </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoList />
       <AddTodoForm />
      </div>
    );
  }
}

export default App;
