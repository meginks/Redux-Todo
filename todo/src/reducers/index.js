import { ADD_TODO } from '../actions/index.js';



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
        return {
            ...state, 
            newTodo: action.payload
        }
        default: 
        return {
            state
        }
    } 
} 

export default todos;