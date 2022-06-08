import React, { useEffect } from "react";
import styles from "./counter.module.css";

const Counter = ({ countvalue }) => {
  // sample value to be replaced
  const [count, setCount] = React.useState(0);
  // NOTE: do not delete `data-testid` key value pair
  useEffect(() => {
    setCount(countvalue);
  }, [countvalue]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  }

  return countvalue ? (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={increment}>
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={decrement}>
        -
      </button>
    </div>
  ) : null;
};

export default Counter;
