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

  @media screen and (max-width: 800px) {
    height: 50px;
    font-size: 22px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    font-size: 18px;
  }

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

const FancyDiv = styled.div`
  height: 60px;
  width: 8px;
  background: #699e64;
  display: flex;

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 6px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 4px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  width: 582px;
  height: 60px;
  background: #fcf4f4;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 352px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 211px;
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

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 117px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 93px;
  }
`;

const StyledMdDoneContainer = styled.div`
  background: #699e64;
  width: 66.665px;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 58.5px;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 46.5px;
    font-size: 16px;
  }

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

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 58.5px;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 46.5px;
    font-size: 16px;
  }
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
