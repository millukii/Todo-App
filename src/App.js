import {ApolloProvider} from '@apollo/client';
import React from 'react';
import client from './Client.js'; 
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <ApolloProvider client={client}>
      <TodoList></TodoList>
    </ApolloProvider>
  );
}

export default App;
