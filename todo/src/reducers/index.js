import { ADD_TODO } from '../actions/index.js';



const initialState = {
    todos: [
    {todo: 'wash dishes', 
    id: Date.now()}, 
    {todo: 'laundry', 
    id: Date.now()}
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