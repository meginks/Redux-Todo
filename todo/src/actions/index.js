export const ADD_TODO = 'ADD_TODO'; 
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';

export const addTodo = (task) => {
return {
    type: ADD_TODO, 
    payload: task
}
}

export const deleteTodo = (task) => {
    return {
        type: DELETE_TODO, 
        payload: task
    }
} 

export const toggleTodo = id => {
    console.log(id);
    return {
      type: TOGGLE_TODO,
      payload: id
    };
  };

  export const clearComplete = () => {
      return {
          type: CLEAR_COMPLETE,
      }
  }