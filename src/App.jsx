import { React, useState } from 'react'
import './App.css'
import Todo from './Components/Todo'

function App() {

  const [todo, settodo] = useState("")

  return (
    <>
      <div>
        <div>
          <h1>Todo List</h1>
          <form>
            <input type="text" />
            <button>Add Todo</button>
          </form>
          <div className="todoDisplay">
            <ul>
              <li>Single Item</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
