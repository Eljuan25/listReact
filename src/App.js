import  React,{ useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea" 
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(index)}>
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
