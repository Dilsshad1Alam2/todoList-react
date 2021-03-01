import React from "react";
import styled from "styled-components";
import { FaPlusSquare } from "react-icons/fa";

const FormContainer = styled.div`
  font-family: "PT Sans", sans-serif;
  display: flex;
  justify-content: center;
`;
const ParentContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InputAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    height: 60px;
    width: 500px;
    background-color: #fcf4f4;
    font-size: 30px;
    outline: none;
    border: none;
    color: #b46363;
    padding: 0;
  }
`;

const StyledFaPlus = styled(FaPlusSquare)`
  font-size: 30px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  padding: 0;

  &:hover {
    filter: brightness(110%);
  }
`;

const ChooseAll = styled.div`
  display: flex;

  select {
    font-size: 18px;
    outline: none;
    border: none;
    color: #b46363;
  }

  option {
    background: #e89c8c;
    color: #fff;
  }
`;

const Form = ({ setCurrentTask, todos, setTodos, currentTask, setCatgory }) => {
  const onChangeHandler = (e) => {
    setCurrentTask(e.target.value);
  };

  const toSetTodos = () => {
    if (currentTask.length > 2) {
      setTodos([
        ...todos,
        {
          text: currentTask,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ]);
      setCurrentTask("");
    }
  };

  const onClickHandler = (e) => {
    toSetTodos();
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      toSetTodos();
    }
  };

  const categoryChangedHandler = (e)=>{
    setCatgory(e.target.value)

  }

  return (
    <FormContainer>
      <ParentContainer>
        <InputAddContainer>
          <input
            value={currentTask}
            onChange={onChangeHandler}
            onKeyDown={keyDownHandler}
            type="text"
          />
          <StyledFaPlus onClick={onClickHandler} />
        </InputAddContainer>

        <ChooseAll>
          <select onChange = {categoryChangedHandler} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </ChooseAll>
      </ParentContainer>
    </FormContainer>
  );
};

export default Form;
