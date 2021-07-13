import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import Template from './Template';
import TodoList from './TodoList';
import TodoInsert from './TodoInsert';

import { FcPlus } from 'react-icons/fc';

/**
 *  TodoApp 함수 밖에 놓는 이유
 *      함수 안에 있으면 함수가 리랜더링될 때마다, nextId = 4로 사용
 */
let nextId = 4;

const TodoApp = () => {

  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '할일 1',
      checked : true,
    },
    {
      id : 2,   
      text : '할일 2',
      checked : false,
    },
    {
      id : 3,
      text : '할일 3',
      checked : true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if ( text === '' ) {
      return alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id : nextId,
        text,                 //text : text
        checked : false,
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <Template todoLength = {todos.length}>
      <TodoList todos = {todos} onCheckToggle = {onCheckToggle}/>
      <AddTodoButton onClick = {onInsertToggle}>
        <FcPlus />
      </AddTodoButton>
      {insertToggle && 
        <TodoInsert 
          onInsertToggle = {onInsertToggle}
          onInsertTodo = {onInsertTodo}
        />}
    </Template>
  );
}

const AddTodoButton = styled.div`
  position : fixed;
  right : -5px;
  bottom : 0;
  z-index : 100;
  width : 100px;
  height : 100px;
  cursor : pointer;
  font-size : 5rem;
`;

export default TodoApp;
