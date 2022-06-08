import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = () => {
  const { todo, handleChange } = useContext(TodoContext);

  function handleClick(id) {
    handleChange(
      todo.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDelete(id) {
    handleChange(todo.filter((task) => task.id !== id));
  }

  return (
    <>
      {todo.map((task) => (
        <li data-testid="task" className={styles.task} key={task.id}>
          {task.done ? (
            <input
              type="checkbox"
              data-testid="task-checkbox"
              onClick={() => {
                handleClick(task.id);
              }}
              defaultChecked
            />
          ) : (
            <input
              type="checkbox"
              data-testid="task-checkbox"
              onClick={() => {
                handleClick(task.id);
              }}
            />
          )}
          <div
            data-testid="task-text"
            style={task.done ? { textDecoration: "line-through" } : {}}
          >
            {task.text}
          </div>
          <Counter countvalue={task.count} />
          <button
            data-testid="task-remove-button"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;
