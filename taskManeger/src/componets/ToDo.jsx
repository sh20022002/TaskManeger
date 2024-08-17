import React, { useState } from 'react';
import ToDosItem from './ToDosItem';
import '../css/ToDoItem.css'

export default function ToDo() {
    const [todo, setToDo] = useState('');
    const [todos, setTodos] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setToDo('');
    };
    function createKey() {
        return Math.random();
    };
    return (
    <div> 
      <form className='input-style'  onSubmit={handleSubmit}> 
        <input onChange={(e)=> setToDo(e.target.value)} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <ToDosItem item={item} key={item}/>
        ))}
    </div> 
  );
};