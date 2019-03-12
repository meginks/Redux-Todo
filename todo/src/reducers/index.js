import { ADD_TODO , TOGGLE_TODO } from '../actions/index.js';

const initialState = {
    todos: [
        {task: 'clean bathroom', 
        id: 1, 
        completed: false
        }, 
          
        {task: 'take out trash', 
        id: 2, 
        completed: false
        }, 
    
        {task: 'cook dinner', 
        id: 3, 
        completed: false
        }, 
    
        {task: 'do laundry', 
        id: 4, 
        completed: false
        }
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
        default: 
        return {
            ...state
        }
    } 
} 

export default todos; 