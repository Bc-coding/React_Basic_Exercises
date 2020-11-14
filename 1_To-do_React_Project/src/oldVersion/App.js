import React, { useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // create a function add to do that will take any todo and add it to the array
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>ToDo List</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;


// const [state, setState] = useState([])