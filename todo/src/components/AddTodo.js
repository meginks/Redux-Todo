import React from 'react';

const AddTodo = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                type="text"
                value={props.value}
                name="task"
                onChange={props.handleChanges}
                placeholder="add task here"
            />
            <button onClick={props.addTodo}>Add To Do</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default AddTodo;