import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import litopys from './litopys.png';
import chrestyk from './chrestyk.png';

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
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };  
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); 
    
  };
  const getLocalTodos = () => {
      if(localStorage.getItem('todos')===null){
        localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos')); 
      setTodos(localTodo);
    }
  };
  return (
    <div className="App">
      <header>
        <img className='chrestyk' src={chrestyk} alt='ukrainian cross' width='83' height='80'></img>
        <img src={litopys} alt='logo' width='293' height='116'></img>        
      </header>
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      <Footer />
    </div>
  );
}

export default App;
