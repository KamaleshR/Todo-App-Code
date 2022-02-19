import React, { useEffect, useState } from 'react';

function TodoForm({ newTodo, setNewTodo, todoList, setTodoList, setStatus }) {

    const handleSubmit = event => {
        event.preventDefault();
        //check for empty input
        if (!newTodo || /^\s*$/.test(newTodo)) {
            return;
        }
        setTodoList([...todoList, {
            id: Math.random() * 10000, //random id generation
            text: newTodo,
            completed: false,
        }]);
        setNewTodo("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder='Enter the task name' value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)} autoFocus></input>
            <button type='submit' className='todo-add-button'>
                <i className="fas fa-plus-circle"></i>
            </button>
            <select name="filter-todo" className='filter' onChange={e => setStatus(e.target.value)}>
                <option value="all">ALL</option>
                <option value="pending">PENDING</option>
                <option value="completed">COMPLETED</option>
            </select>
        </form>
    )
}

export default TodoForm