import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
const App = () => {
  const [todos, setTodos] = useState([]); //todos is an array and can be modified using setTodos
  useEffect(() => { //called when the component is rendered; which component? App component
    // Fetch data from the Express server
    axios.get('http://localhost:5000/todos') //request response from server
      .then(response => setTodos(response.data)) //setTodos is used to update the state of todos ; then function is used as a "promise-chain" - once response returns successfully, executes the function inside
      .catch(error => console.error(error)); //error handling
  }, []);
  const addTodo = (newTodo) => {
  setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd = {addTodo} />
      <ul>
        {todos.map(todo => (//map - for each todo in todos, add li element
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;