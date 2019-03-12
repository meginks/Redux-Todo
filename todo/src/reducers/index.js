import { ADD_TODO , TOGGLE_TODO, CLEAR_COMPLETE, DELETE_TODO } from '../actions/index.js';

const initialState = {
    todos: [
    ]
    
}

 const todos = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
      const newTask = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTask]
      };
      case DELETE_TODO: 
      return {
          ...state, 
          todos: state.todos.filter(todo => 
            todo.id === action.payload )
      }
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, id) => {
          if (action.payload === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
      case CLEAR_COMPLETE: 
      return {
          ...state, 
          todos: state.todos.filter((todo) => todo.completed === true
          )
      }
        default: 
        return {
            ...state
        }
    } 
} 

export default todos; 