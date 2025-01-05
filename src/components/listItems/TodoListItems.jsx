import styles from "./TodoListItems.module.css";

export default function TodoListItems({ items, todos, setTodos }) {
  function deleteTodo(items) {
    setTodos(todos.filter((todo) => todo !== items));
  }
  return (
    <div className={styles.listWrap}>
      <div>
        <h1>
          {items} <button onClick={() => deleteTodo(items)}>x</button>
        </h1>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
