import React from 'react';
import {useQuery} from '@apollo/client';
import GET_TODO_LIST from '../graphql/getTodoList.graphql';

const TodoList = () => {

  const {data, error, loading} = useQuery(GET_TODO_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error... ${error.message}`</p>
  
  return (
    <React.Fragment>
      {data.todos.map((todo) => {
       return (
        <div key={todo.id}>
          {todo.text} - {todo.done} - {todo.userId}
        </div>
        )
      })

      }
    </React.Fragment>
  )
}

export default TodoList;