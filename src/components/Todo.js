import React from "react";
import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./todo.css";

const ToDOContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  height: 60px;
  margin: 8px;
  user-select: none;

  li {
    margin-left: 12px;
    list-style: none;
  }

  button {
    background-color: #699e64;
    border: 1px solid skyblue;
    outline: none;
    color: #fff;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  width: 133.333px;
  height: 60px;
  background: #fcf4f4;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const FancyDiv = styled.div`
  height: 60px;
  width: 8px;
  background: #699e64;
  display: flex;
`;

const ListContainer = styled.div`
  display: flex;
  width: 510px;
  height: 60px;
  background: #fcf4f4;
  align-items: center;
`;
const StyledMdDoneContainer = styled.div`
  background: #699e64;
  width: 66.665px;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(110%);
  }
`;

const StyledAiOutlineDeleteContainer = styled.div`
  background: #f2b6aa;
  width: 66.665px;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(105%);
  }
`;

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const taskDoneHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <ToDOContainer>
      <ListContainer>
        <FancyDiv />
        <li className={` ${todo.completed ? "completed" : ""}`}>{text}</li>
      </ListContainer>

      <IconsContainer>
        <StyledMdDoneContainer onClick={taskDoneHandler}>
          <MdDone />
        </StyledMdDoneContainer>

        <StyledAiOutlineDeleteContainer onClick={deleteTodoHandler}>
          <RiDeleteBin6Line />
        </StyledAiOutlineDeleteContainer>
      </IconsContainer>
    </ToDOContainer>
  );
};

export default Todo;
