import React from 'react';
import {connect} from 'react-redux';
import { addTodo , toggleTodo } from '../actions'; 
import './todolist.css';

class TodoList extends React.Component {
    state = {
        newTask: ''
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask); 
        this.setState({ newTask: ''})
    }

    handleChanges = e => {
        this.setState({ newTask: e.target.value });
    }

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    render () {
        return (
            <div>
            <h1>To Do List</h1>
            <div>
                {this.props.todos.map((todo, index) => {
                    return (
                    <div className={`todo-item ` + (todo.completed ? 'completed' : null)} key={index} onClick={()=> this.toggleTodo(index)}> 
                        {todo.task}
                        </div> )
                })}

            </div>
            <input 
                type="text"
                name="task"
                value={this.state.newTask}
                placeholder="add task here"
                onChange={this.handleChanges}
            />
            <button onClick={this.addTodo}>Add To Do</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todos
    };
};


export default connect(mapStateToProps, { addTodo, toggleTodo } )(TodoList); 