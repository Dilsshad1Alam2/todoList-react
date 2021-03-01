import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ToDOList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const TestContainer = styled.div`
  display: flex;

  li {
    list-style: none;
  }
`;

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <TodoListContainer>
      <ToDOList>
        {filtered.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ToDOList>
    </TodoListContainer>
  );
};

export default TodoList;
