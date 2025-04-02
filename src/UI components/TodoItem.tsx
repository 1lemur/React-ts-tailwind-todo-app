import clsx from 'clsx';
import React from 'react';
import { RxCheck, RxCross2, RxTrash } from "react-icons/rx";

interface Todo{
  id: number,
  title: string, 
  completed: boolean,
  date: string
}
interface TodoItemProps{
  removeTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  todo: Todo
}


function TodoItem( {todo, removeTodo, changeStatus}: TodoItemProps ) {
  return (
    <div className='flex justify-between p-3 bg-slate-700 text-white rounded-xl items-center cursor-pointer' onClick={() => changeStatus(todo.id)}>
      {!todo.completed ? 
        <RxCross2 size={window.innerWidth >= 640 ? 48 : 32} className='border-2 p-1 border-white rounded-xl mr-3' /> : 
        <RxCheck size={window.innerWidth >= 640 ? 48 : 32} className='border-2 p-1  border-white rounded-xl mr-3' />
      }
      <div className="flex flex-col gap- w-full">
        <h3 className={clsx({
          'opacity-15' : todo.completed,
          '' : !todo.completed
        })}>{todo.title}</h3>
        <h5 className={clsx('text-base', {
          'opacity-15' : todo.completed,
          '' : !todo.completed
        })}>{todo.date}</h5>
      </div>
      <RxTrash 
        className='bg-slate-300 text-black p-1 rounded-xl hover:bg-slate-100 ease-in duration-200 cursor-pointer' 
        onClick={() => removeTodo(todo.id)}
        size={window.innerWidth >= 640 ? 48 : 32}
      />
    </div>
  )
}

export default TodoItem;