import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // trim() method removes the empty spaces.
        if (inputValue.trim()) {
            // ...todos copy the value inside the useState and inputValue add the new value inside the input
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <div>
        <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo." />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
