import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

//Hacer persistente los datos a través del localStorage
const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {
  
  const [ todos, dispatch ] = useReducer( todoReducer, [], init )

  //Cuando el [todos] cambia se necesita ejecutar algo, se hace a través del useEffect
  useEffect(() => {
    localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }, [todos])

  //Método para usar el useReducer (todoReducer.js)
  const handleNewTodo = ( todo ) => {
    //acción que se le enviará al reducer
    const action = {
        type: '[TODO] Add Todo',
        payload: todo,
    }
    //Para enviarle la acción (action) al reducer se envia con el dispatch
    dispatch( action );
}

const handleDeleteTodo = ( id ) => {
    dispatch({
        type: '[TODO] Remove Todo',
        payload: id,
    });
}

const handleToggleTodo = ( id ) => {
    //console.log(id)
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id,
    });
}

  return {
    todos,
    todosCount: todos.length, 
    pendingTodosCount: todos.filter( todo=> !todo.done).length,
    handleDeleteTodo, 
    handleToggleTodo, 
    handleNewTodo,
  }
}
