import React from 'react';


class AddTodo extends React.Component {
    state= {
        newTodo: ''
    }
    render() {
    return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">add to do</button>
      </form>
    </div>
    )
    }
  } 

  export default AddTodo; 