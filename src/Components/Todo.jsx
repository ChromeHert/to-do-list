import { React, useState } from 'react'

const Todo = () => {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {todoName: todo}]);
    setTodo("");
  };
  return (
    <>
      <div className="bg-gray-200 w-full h-screen flex items-center">
        <div className="w-[500px] mx-auto bg-white p-5 rounded-xl">
          <h1 className="text-6xl font-bold text-center mb-8 text-gray-800">
            Todo List
          </h1>
          <form onSubmit={handleForm}>
            <input
              type="text"
              className="border-2 border-gray-800 w-full p-3 rounded-lg placeholder:text-gray-600"
              placeholder="Enter your tasks"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />

            <button
              className="bg-blue-900 text-white py-3 px-8 rounded-lg mb-5 my-4"
              type="submit"
            >
              Add Todo
            </button>
          </form>
          <div className="todoDisplay">
            <ul>
              {todoList.map((singleTodo, index) => {
                return (
                  <li key={index} className="bg-gray-800 text-white py-5 px-4 rounded-lg my-1 flex justify-between">
                    {singleTodo.todoName}
                    <span className="text-red-600 cursor-pointer">X</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo