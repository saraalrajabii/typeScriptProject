import React, { useState } from "react";
interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "first type", completed: false },
    { id: 2, text: "sec type", completed: false },
  ]);

  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setTodos(
      todos?.map((todo) => {
        if (todo && todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleSubmit = () => {
    const newTodo: item = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add todo item here "
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Add Item{" "}
      </button>
    </div>
  );
};

export default TodoList;
