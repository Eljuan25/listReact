
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Eliminar</button>
    </div>
  );
};

export default Todo;
