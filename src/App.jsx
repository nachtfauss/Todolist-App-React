import { useState } from 'react';
import TodoInput from './Todolist-App/TodoInput';
import TodoList from './Todolist-App/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Props' },
    { id: 3, text: 'Belajar React State & Event handling' },
    { id: 2, text: 'Belajar React Conditional rendering' },
  ]);

  const handleTask = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleTaskDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Tasks</h1>
            <p className="text-gray-500">Stay organized, stay productive</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6">
            <TodoInput onAdd={handleTask} />
            <TodoList items={todos} onDelete={handleTaskDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
