import { useState } from "react";
import TodoListItems from "../listItems/TodoListItems";
import Header from "../header/Header";

import styles from "./Todo.module.css";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    setTodos([...todos, todo]);
    console.log(todos);
    setTodo("");
  }

  return (
    <div>
      <Header />

      <form className={`${styles.todoForm}`} onSubmit={submitForm}>
        <div>
          <input
            className={`${styles.inputBox}`}
            placeholder="Enter To-Do Item"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
          />
          <button>Add</button>
        </div>
      </form>

      <div className={`${styles.listContainer}`}>
        {todos.map((todoItems) => (
          <TodoListItems
            key={todoItems}
            items={todoItems}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
}
