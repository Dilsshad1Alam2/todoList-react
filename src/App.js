import React, { useState, useEffect } from "react";
import Form from "./components/form";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f3dbdb;
  color: #b46363;
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Header = styled.p`
  color: #699e64;
  font-size: 50px;

  @media screen and (max-width: 800px) {
  font-size: 35px;
  }

  @media screen and (max-width: 500px) {
  font-size: 25px;
  }


`;

const App = () => {
  const [currentTask, setCurrentTask] = useState("");

  const [todos, setTodos] = useState([]);

  const [category, setCatgory] = useState("all");

  const [filtered, setFiltered] = useState([]);

  const filterHandler = () => {
    switch (category) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  useEffect(()=>{
    getFromLocal();
  },[])

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, category]);



//Local storage 

const saveToLocal = () =>{
localStorage.setItem('todos', JSON.stringify(todos));
}

const getFromLocal = () =>{
if(localStorage.getItem('todos') === null){
  localStorage.setItem('todos', JSON.stringify([]));
}else{
  let localValue = JSON.parse(localStorage.getItem('todos'))
  setTodos(localValue);
}  
}

  return (
    <AppContainer>
      <HeaderContainer>
        <Header> My ToDo List</Header>
      </HeaderContainer>

      <Form
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        todos={todos}
        setTodos={setTodos}
        setCatgory={setCatgory}
      />

      <TodoList todos={todos} setTodos={setTodos} filtered = {filtered}/>
    </AppContainer>
  );
};

export default App;
