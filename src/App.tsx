import React, { useEffect, useState } from "react";
import MainButtons from "./UI components/MainButtons";
import TodoItem from "./UI components/TodoItem";

interface Todo{
  id: number,
  title: string, 
  date: string,
  completed: boolean
}

function App() {
  const [todo, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const removeTodo = (id: number): void => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo: Todo): void => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const changeStatus = (id: number): void => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))}, [todo]
  )

  return (
    <div className="flex flex-col items-center p-4 h-screen bg-slate-100">
      <header className="text-6xl font-extrabold text-slate-700 mb-3">Todo List</header>
      <main className="w-10/12 flex flex-col gap-3">
        <MainButtons addTodo={addTodo} todo={todo} />
        {todo.length !== 0 ? 
          <div className="flex flex-col gap-5 text-2xl p-3 bg-slate-300 rounded-xl">
            {todo.map(todo => 
              <TodoItem todo = {todo} key={todo.id} removeTodo={removeTodo} changeStatus={changeStatus}/>)}
          </div>
        : <main className="flex w-full justify-center text-5xl font-extrabold text-slate-700"><h1>Nothing to do, write a task</h1></main>
        }
      </main> 
    </div>
  );
}

export default App;