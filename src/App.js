import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {

  //states
  const [newTodo, setNewTodo] = useState("");
  const [clearLocal, setClearLocal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [edit, setEdit] = useState({
    id: '',
    text: '',
    completed: false,
  })

  //lifeCycles
  useEffect(() => { filter(); localStore(); }, [todoList, status])

  useEffect(()=>{
    if(todoList.length===1){
      setClearLocal(true)
    }
    else{
      setClearLocal(false)
    }
  },[todoList])

  useEffect(() => {
    setNewTodo(edit.text)
    setTodoList(todoList.filter(item => item.id !== edit.id))
  }, [edit]);

  useEffect(() => {
    localStorage.getItem('todos') ? setTodoList(JSON.parse(localStorage.getItem('todos'))) : setTodoList([])
  }, []);

  const filter = () => {
      switch (status) {
        case "completed":
          setFilteredList(todoList.filter(todo => todo.completed === true))
          break;
        case "pending":
          setFilteredList(todoList.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredList(todoList)
          break;
      }
  }

  const localStore = () => {
    if (todoList.length !== 0 || clearLocal)
      localStorage.setItem('todos', JSON.stringify(todoList))
  }



  return (
    <div className="App">
      <header>
        <h1>To-Do App</h1>
      </header>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} todoList={todoList} setTodoList={setTodoList} setStatus={setStatus} />
      <TodoList todoList={todoList} status={status} filteredList={filteredList} setFilteredList={setFilteredList} setTodoList={setTodoList} setEdit={setEdit} />
    </div>
  );
}

export default App;
