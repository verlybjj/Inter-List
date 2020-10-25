import React from 'react';
import {useState, useEffect}  from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
       case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
       default:
         setFilteredTodos(todos);
         break;
      }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") ===null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
    let todolocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todolocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Interlist</h1>
      </header>
        <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} 
        setStatus={setStatus}
        />
        <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos} 
        />
      <div className="logo-container"> 
    <img
          className="logo"
          src="https://i.pinimg.com/originals/c0/eb/a2/c0eba234bc326b8eecfabad532c944d7.png"
          alt="logo"
        />
    </div>

    </div>
  );
}


export default App;


