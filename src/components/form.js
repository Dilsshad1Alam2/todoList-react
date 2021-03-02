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
  padding: 0px;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    gap: 5px;
  }
`;

const InputAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 60px;
    width: 490px;
    background-color: #fcf4f4;
    font-size: 30px;
    outline: none;
    border: none;
    color: #b46363;
    padding-left: 10px;

    @media screen and (max-width: 800px) {
      height: 50px;
      width: 280px;
      font-size: 22px;
      padding-left: 6px;
    }

    @media screen and (max-width: 500px) {
      height: 40px;
      width: 154px;
      font-size: 18px;
      padding-left: 6px;
    }
  }
`;

const StyledFaPlusContainer = styled.div`
  height: 61.98px;
  background-color: #fcf4f4;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 52px;
    width: 60px;
  }

  @media screen and (max-width: 500px) {
    height: 41.98px;
    width: 40px;
  }
`;

const StyledFaPlus = styled(FaPlusSquare)`
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 25px;
    width: 25px;
  }

  &:hover {
    filter: brightness(110%);
  }
`;

const ChooseAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    font-size: 18px;
    outline: none;
    border: none;
    color: #b46363;
    height: 60px;

    @media screen and (max-width: 800px) {
      height: 50px;
      font-size: 16px;
  }

    @media screen and (max-width: 500px) {
      height: 40px;
      width: auto;
      font-size: 12px;
    }
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

  const categoryChangedHandler = (e) => {
    setCatgory(e.target.value);
  };

  return (
    <FormContainer>
      <ParentContainer>
        <InputAddContainer>
          <input
            value={currentTask}
            onChange={onChangeHandler}
            onKeyDown={keyDownHandler}
            type="text"
            placeholder ="Enter Task Here"
          />
          <StyledFaPlusContainer>
            <StyledFaPlus onClick={onClickHandler} />
          </StyledFaPlusContainer>
        </InputAddContainer>

        <ChooseAll>
          <select onChange={categoryChangedHandler} name="todos">
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
