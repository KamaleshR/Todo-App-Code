import React from 'react';
import Todo from './Todo';

function TodoList({ todoList, setTodoList, filteredList, setEdit }) {
    return (
        <div className='task-container'>
            <ul className='todo-list'>
                {filteredList.map(todo => <Todo key={todo.id} todo={todo} setTodoList={setTodoList} todoList={todoList} setEdit={setEdit} />)}
            </ul>
        </div>
    )
}

export default TodoList