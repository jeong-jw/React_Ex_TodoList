import React from 'react';
import styled from "styled-components";

import TodoList from './TodoList';
import TodoItem from './TodoItem';

const Template = ({ children, todoLength }) => {
  return(
    <TemplateBox>
      <Title>오늘의 할 일 ({todoLength})</Title>
      <div>{children }</div>
    </TemplateBox>
  );
};

const TemplateBox = styled.div`
  padding-top : 20px;
  max-height : 100vh;
`;

const Title = styled.div`
  width : 90vw;
  margin-left : auto;
  margin-right : auto;

  padding-bottom : 20px;
  font-size : 1.5rem;
  font-weight : bold;
  color : #6c567b;
`;

export default Template;
