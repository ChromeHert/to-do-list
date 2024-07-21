import { React, useState } from 'react'
import './App.css'
import Todo from './Components/Todo'

function App() {

  const [todo, setTodo] = useState("")

  return (
    <>
      <div className='bg-gray-200 w-full h-screen flex items-center'>
        <div className='w-[500px] mx-auto bg-white p-5'>
          <h1 className='text-6xl font-bold text-center mb-8'>Todo List</h1>
          <form>
            <input type="text" className='border-2 border-gray-800 w-full p-3 placeholder:text-gray-600'
            placeholder='Enter your tasks'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />

            <button className='bg-blue-900 text-white py-3 px-8 rounded-lg mb-5' type="submit">Add Todo</button>
          </form>
          <div className="todoDisplay">
            <ul>
              <li className='bg-gray-800 text-white py-5 px-2 rounded-lg flex justify-between'>Single Item
                <span className='text-red-600 cursor-pointer'>X</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
