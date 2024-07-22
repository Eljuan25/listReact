// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="App">
         <img src="/img/logo.jpg" alt="icon" className="header-icon" />
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
        <button onClick={() => setFilter('pending')}>Pendientes</button>
      </div>
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;

