import react, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,  setTodos] = useState([])

    function addTodo(todo) {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    function removeTodo(id) {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
          return todo;
        });
        setTodos(updatedTodos);
      };


    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                 todos={todos}
                 completeTodo={completeTodo}
                 removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList
