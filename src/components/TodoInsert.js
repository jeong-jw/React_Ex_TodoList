import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MdAddCircle as CircleIcon } from 'react-icons/md';

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {

  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();     //새로고침 방지   //form 밑에 button 타입이 submit => 자동 새로고침
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  }

  return(
    <>
      <Background>
        <FormBox onSubmit = {onSubmit}>
          <input 
            placeholder = 'please type' 
            value = {value} 
            onChange = {onChange}
          ></input>
          <button type = 'submit' >
            <CircleIcon/>
          </button>
        </FormBox>
      </Background>
    </>
  );
};

const Background = styled.div`
  position : fixed;
  z-index : 980;
  top : 0;
  overflow : hidden;
  width : 100vw;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
  background : #6c567b;
  opacity : .8;
`;

const FormBox = styled.form`
  margin : auto;
  position : fixed;
  top : 40%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  z-index : 990;
  width : 300px;
  height : 150px;
  border-radius : 5px;
  box-shadow : 1px 2px 5px 1px #f67280;
  background : white;

  & > input {
    background : none;
    outline : none;
    border : none;
    border-bottom : 1px solid #f67280;

    padding : 0.5rem;
    font-size : 1.125rem;
    line-height : 1.5;
  }

  & > button {
    padding-top : 20px;
    background : none;
    outline : none;
    border : none;
    color : #f67280;
    padding-left : 1rem;
    padding-right : 1rem;
    font-size : 1.5rem;
    display : flex;
    align-items : center;
    cursor : pointer;
    transition : 0.1s background ease-in;
  }
`;

export default TodoInsert;
