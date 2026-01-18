import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, task: inputText }]);
  };

  const addthroughKey = (e) => {
    e.key === "Enter" && addTodo();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    let editingTodo = todos.filter((todo) => todo.id === id);
    console.log(editingTodo);
    setInputText(editingTodo[0].task);
    deleteTodo(id);
  };

  return (
    <div className="flex flex-col gap-5 w-fit mx-auto p-20">
      <div className="flex justify-center items-center p-2 ">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={addthroughKey}
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Add Todo
        </button>
      </div>

      <ul className="w-[400px] mx-auto flex flex-col gap-2">
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b border-gray-300 p-2"
            >
              <span>{todo.task}</span>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => editTodo(todo.id)}
                  className="bg-yellow-500 text-white rounded-md p-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white rounded-md p-1"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
