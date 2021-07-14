import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSeletedTodo }) => {
  
  return(
    <TodoListBox>
      {todos.map(todo => (
        <TodoItem
          key = {todo.id}
          todo = {todo}
          onCheckToggle = {onCheckToggle}
          onInsertToggle = {onInsertToggle}
          onChangeSeletedTodo = {onChangeSeletedTodo}
        />
      ))}
    </TodoListBox>
  );
};

const TodoListBox = styled.div`
  width : 90vw;
  margin-left : auto;
  margin-right : auto;
  padding-bottom : 20px;
`;

export default TodoList;
