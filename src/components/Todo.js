import React from 'react'

function Todo(props) {

    const handleDelete = () => {
        props.setTodoList(props.todoList.filter(item => item.id !== props.todo.id))
    }

    const handleComplete = () => {
        props.setTodoList(props.todoList.map(item => {
            if (item.id === props.todo.id) {
                return ({
                    ...item, completed: !item.completed
                })
            };
            return item
        }));
    }


    return (
        <div className='todo'>
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}</li>
            <div className='todo-icons'>
                <button className='edit-btn' onClick={() => props.setEdit(props.todo)}><i className='fas fa-pen'></i></button>
                <button className='complete-btn' onClick={handleComplete}><i className='fas fa-check'></i></button>
                <button className='delete-btn' onClick={handleDelete}><i className='fas fa-trash'></i></button>
            </div>
        </div>
    )
}

export default Todo