import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../actions'; 


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
                    <div key={index}> 
                        {todo.task}
                        </div> )
                })}

            </div>
            <form onSubmit={() => this.props.addTodo}>
            <input 
                type="text"
                name="task"
                value={this.state.newTask}
                placeholder="add task here"
            />
            <button onClick={this.props.addTodo}>Add To Do</button>
        </form>
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


export default connect(mapStateToProps, { addTodo } )(TodoList); 