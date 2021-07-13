import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { 
  MdCheckBox as CheckedIcon, 
  MdCheckBoxOutlineBlank  as NotCheckedIcon
} from 'react-icons/md';

const TodoItem = ({ todo, onCheckToggle }) => {

  const { id, text, checked } = todo;

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return(
    <TodoItemBox>
      <Content checked = {checked}>
        {checked ? 
          <CheckedIcon onClick = {() => onCheckToggle(id)} /> 
        : 
          <NotCheckedIcon onClick = {() => onCheckToggle(id)}/> 
        }
        <div>{text}</div>
      </Content>
    </TodoItemBox>
  );
};

const TodoItemBox = styled.div`
  margin-left : auto;
  margin-right : auto;
  margin-bottom : 15px;

  border-radius : 5px;
  box-shadow : 1px 2px 5px 1px #f67280;
  padding : 1rem;
  display : flex;
  align-items : center;
`;

const Content = styled.div`
  gap : 10px;
  cursor : pointer;
  flex : 1;
  display : flex;
  align-items : flex-start;

  svg{
    font-size : 1.5rem;
    color : #f67280;
  }
  text {
    margin-left : 0.5rem;
    flex : 1;
  }
  div{
    /* text-decoration : ${(props) => props.checked === true ? 'line-through' : ''}; */
    ${({ checked}) => {
      return css`
        color : ${checked === true ? '#6c567b' : ''};
        text-decoration : ${checked === true ? 'line-through' : ''};
        cursor : ${checked === true ? 'pointer' : ''};
        opacity : ${checked === true ? '0.6' : ''};
      `;
    }}
  }
`;

export default TodoItem;
