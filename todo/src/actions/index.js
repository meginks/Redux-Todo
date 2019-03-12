export const ADD_TODO = 'ADD_TODO'; 
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


const addTodo = () => {
return {
    type: ADD_TODO, 
}
}

const deleteTodo = () => {
    return {
        type: DELETE_TODO
    }
} 

const toggleTodo = () => {
    return {
        type: TOGGLE_TODO
    }
}