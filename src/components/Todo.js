import React, {useState} from 'react'
// import TodoForm from './TodoForm'
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({ todos, completeTodo, removeTodo }) {
    // const [edit, setEdit] = useState({
    //     id: null,
    //     values: ""
    // })

    return todos.map((todo) => (
        <div className="todoList">
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <DeleteIcon
              onClick={() => removeTodo(todo.id)}
              className='deleteIcon'
            />
           
          </div>
        </div>
      ));
}

export default Todo
