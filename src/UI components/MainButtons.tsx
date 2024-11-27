import { format } from 'date-fns';
import React, { useState } from 'react';

interface Todo{
  id: number,
  title: string, 
  completed: boolean,
  date: string
}
interface MainButtonsProps{
  addTodo: (newTodo: Todo) => void;
  todo: Todo[]
}

function MainButtons({ addTodo }: MainButtonsProps) {
  const [input, setInput] = useState<string>('')

  const now = new Date()
  const formattedDate = format(now, 'dd.MM.yyyy HH:mm')

  const correctTodo = () => {
      if(!input.trim()) return;
      addTodo({
        id: Date.now(), 
        title: input, 
        date: formattedDate,
        completed: false
      })
      setInput('')
    }

  return (
    <div className="flex w-full text-2xl">
      <input 
        type="text" 
        className="input-addTask outline-none placeholder:text-slate-300 rounded-e-none bg-slate-700 text-white p-3 rounded-xl hover:opacity-95 transition-all duration-300 ease-in w-full"
        placeholder='Write a task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? correctTodo() : undefined}
      />
      <button 
        className='button-plus text-white bg-slate-700 px-5 rounded-xl border-none rounded-ss-none rounded-l-none hover:opacity-95 transition-all duration-300 ease-in'
        onClick={correctTodo}
        >
          +
      </button>
    </div>
  )
}

export default MainButtons;